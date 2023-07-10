import { Genre, APIGenre, GenreModel } from "@/domain/model/Genre";

describe("GenreModel", () => {
  const genreData: Genre = {
    id: "1",
    name: "Action",
  };

  const apiGenreData: APIGenre = {
    id: "1",
    name: "Action",
  };

  describe("constructor", () => {
    it("should set the id and name correctly", () => {
      const genreModel = new GenreModel(genreData);

      expect(genreModel.id).toEqual(genreData.id);
      expect(genreModel.name).toEqual(genreData.name);
    });
  });

  describe("fromJSON", () => {
    it("should create a new GenreModel instance from APIGenre", () => {
      const genreModel = GenreModel.fromJSON(apiGenreData);

      expect(genreModel.id).toEqual(apiGenreData.id);
      expect(genreModel.name).toEqual(apiGenreData.name);
    });
  });

  describe("toJSON", () => {
    it("should return JSON representation of GenreModel", () => {
      const genreModel = new GenreModel(genreData);
      const json = GenreModel.toJSON(genreModel);

      expect(json).toEqual(genreData);
    });
  });
});
