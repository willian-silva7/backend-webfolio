const SendObservationFilesService = require('../services/SendObservationFilesService');
const DeleteFileService = require('../services/DeleteFileService');

module.exports = {
  async update(request, response) {
    const { originalname, size, filename } = request.file;
    const { observation_id } = request.params;

    const file = { originalname, size, filename };

    const updateObservation = new SendObservationFilesService();

    const { observation, createdFile } = await updateObservation.execute({
      file,
      observation_id,
    });

    return response.json({ observation, createdFile });
  },

  async delete(request, response) {
    const { observation_id, file_id } = request.params;

    const deleteFileService = new DeleteFileService();

    await deleteFileService.execute({ observation_id, file_id });

    return response.status(200).json();
  },
};
