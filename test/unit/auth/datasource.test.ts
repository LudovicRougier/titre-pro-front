/* eslint-disable @typescript-eslint/no-explicit-any */
import "reflect-metadata";
import { AuthDataSourceImpl } from "@/data/datasource/AuthDataSourceImpl";

// Mock de AxiosInstance pour simuler les appels réseau
const mockAxiosInstance: any = {
  api: {
    post: jest
      .fn()
      .mockResolvedValueOnce({ data: { id: 1, username: "john.doe" } }),
    get: jest.fn().mockResolvedValueOnce({ data: { success: true } }),
  },
};

describe("AuthDataSourceImpl", () => {
  describe("login", () => {
    it("should call the login API endpoint and return the response data", async () => {
      // Création de l'instance de AuthDataSourceImpl en utilisant le mock d'AxiosInstance
      const authDataSource = new AuthDataSourceImpl(mockAxiosInstance);

      // Données de test
      const credentials = {
        username: "john.doe",
        password: "password",
      };

      // Appel de la méthode à tester
      const result = await authDataSource.login(credentials);

      // Vérification des appels et des résultats
      expect(mockAxiosInstance.api.post).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.api.post).toHaveBeenCalledWith(
        "/auth/login",
        credentials
      );
      expect(result).toEqual({ id: 1, username: "john.doe" });
    });
  });

  describe("logout", () => {
    it("should call the logout API endpoint and return the response data", async () => {
      // Création de l'instance de AuthDataSourceImpl en utilisant le mock d'AxiosInstance
      const authDataSource = new AuthDataSourceImpl(mockAxiosInstance);

      // Appel de la méthode à tester
      const result = await authDataSource.logout();

      // Vérification des appels et des résultats
      expect(mockAxiosInstance.api.get).toHaveBeenCalledTimes(1);
      expect(mockAxiosInstance.api.get).toHaveBeenCalledWith("/users");
      expect(result).toEqual({ success: true });
    });
  });
});
