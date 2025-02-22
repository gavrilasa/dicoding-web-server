const { nanoid } = require('nanoid');
const notes = require('./notes');

const createResponse = (h, statusCode, status, message, data = null) => {
  const response = h.response({
    status,
    message,
    ...(data && { data }),
  });
  response.code(statusCode);
  return response;
};

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = { title, tags, body, id, createdAt, updatedAt };
  notes.push(newNote);

  return createResponse(h, 201, 'success', 'Catatan berhasil ditambahkan', { noteId: id });
};

const getAllNotesHandler = (request, h) => createResponse(h, 200, 'success', null, { notes });

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.find((n) => n.id === id);

  if (note) {
    return createResponse(h, 200, 'success', null, { note });
  }

  return createResponse(h, 404, 'fail', 'Catatan tidak ditemukan');
};

const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = { ...notes[index], title, tags, body, updatedAt };
    return createResponse(h, 200, 'success', 'Catatan berhasil diperbarui');
  }

  return createResponse(h, 404, 'fail', 'Gagal memperbarui catatan. Id tidak ditemukan');
};

const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    return createResponse(h, 200, 'success', 'Catatan berhasil dihapus');
  }

  return createResponse(h, 404, 'fail', 'Catatan gagal dihapus. Id tidak ditemukan');
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};