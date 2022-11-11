import artistModel from "../model/artist.js";

class ArtistController {
  static index = (request, response) => {
    artistModel.find({}, (err, data) => {
      if (err) return response.send({ error: "error to consult user" });
      return response.json(data);
    });
  };

  static create = (request, response) => {
    let artist = new artistModel(request.body);

    artist.save((err) => {
      if (err) {
        response
          .status(500)
          .send({ message: `${err.message} - falha ao registrar artista` });
      } else {
        response.status(201).send(artist.toJSON());
      }
    });
  };

  static update = (request, response) => {
    const id = request.params.id;
    artistModel.findByIdAndUpdate(id, { $set: request.body }, (err) => {
      if (!err) {
        response
          .status(200)
          .send({ message: "artista atualizado com sucesso" });
      } else {
        response.status(500).send({ message: err.message });
      }
    });
  };
}

export default ArtistController;
