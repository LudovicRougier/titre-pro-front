import "reflect-metadata";
import { AuthRepositoryImpl } from "@/data/repository/AuthRepositoryImpl";
import { AuthDataSource } from "@/data/datasource/interfaces/AuthDataSource";

// Mock de l'interface AuthDataSource
const mockAuthDataSource: jest.Mocked<AuthDataSource> = {
  login: jest.fn(),
  logout: jest.fn(),
  refreshToken: jest.fn(),
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
        user: {
          id: 1,
          name: "Test",
          age: 20,
          country: "FR",
          gender: null,
          description: null,
          email: "john.doe@example.com",
          email_verified_at: null,
          created_at: "2021-01-01 00:00:00",
          updated_at: "2021-01-01 00:00:00",
          deleted_at: null,
        },
        authorization: {
          token: "abcd1234",
          type: "bearer",
        },
      };

      // Mock de la méthode login du AuthDataSource
      mockAuthDataSource.login.mockImplementation(async () => mockResponse);

      // Données d'entrée pour le test
      const credentials = {
        email: "john.doe",
        password: "password",
      };

      // Appel de la méthode à tester
      const result = await authRepository.login(credentials);

      // Vérification des appels et des résultats
      expect(mockAuthDataSource.login).toHaveBeenCalledTimes(1);
      expect(mockAuthDataSource.login).toHaveBeenCalledWith(credentials);
      expect(result).toEqual({
        id: "1",
        name: "Test",
        email: "john.doe@example.com",
        token: "abcd1234",
      });
    });
  });

  describe("logout", () => {
    it("should call logout method of AuthDataSource", async () => {
      const mockReponse = {
        message: "Successfully logged out.",
        success: true,
      };

      // Mock de la méthode logout du AuthDataSource
      mockAuthDataSource.logout.mockImplementation(async () => mockReponse);

      // Appel de la méthode à tester
      await authRepository.logout();

      // Vérification de l'appel
      expect(mockAuthDataSource.logout).toHaveBeenCalledTimes(1);
    });
  });
});
