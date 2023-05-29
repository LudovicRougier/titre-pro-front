import "reflect-metadata";
import { AuthRepositoryImpl } from "@/data/repository/AuthRepositoryImpl";
import { AuthDataSource } from "@/data/datasource/interfaces/AuthDataSource";

// Mock de l'interface AuthDataSource
const mockAuthDataSource: jest.Mocked<AuthDataSource> = {
  login: jest.fn(),
  logout: jest.fn(),
};

describe("AuthRepository", () => {
  let authRepository: AuthRepositoryImpl;

  beforeEach(() => {
    authRepository = new AuthRepositoryImpl(mockAuthDataSource);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("login", () => {
    it("should call login method of AuthDataSource and return user data", async () => {
      // Mock des données de retour
      const mockResponse = {
        id: 1,
        username: "john.doe",
        email: "john.doe@example.com",
        token: "abcd1234",
      };

      // Mock de la méthode login du AuthDataSource
      mockAuthDataSource.login.mockImplementation(async () => mockResponse);

      // Données d'entrée pour le test
      const credentials = {
        username: "john.doe",
        password: "password",
      };

      // Appel de la méthode à tester
      const result = await authRepository.login(credentials);

      // Vérification des appels et des résultats
      expect(mockAuthDataSource.login).toHaveBeenCalledTimes(1);
      expect(mockAuthDataSource.login).toHaveBeenCalledWith(credentials);
      expect(result).toEqual({
        id: mockResponse.id,
        username: mockResponse.username,
        email: mockResponse.email,
        token: mockResponse.token,
      });
    });
  });

  describe("logout", () => {
    it("should call logout method of AuthDataSource", async () => {
      // Mock de la méthode logout du AuthDataSource
      mockAuthDataSource.logout.mockImplementation(async () => undefined);

      // Appel de la méthode à tester
      await authRepository.logout();

      // Vérification de l'appel
      expect(mockAuthDataSource.logout).toHaveBeenCalledTimes(1);
    });
  });
});
