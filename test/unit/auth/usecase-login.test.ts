import "reflect-metadata";
import { LoginUseCase } from "@/domain/useCase/auth/LoginUseCase";
import { AuthRepository } from "@/data/repository/interfaces/AuthRepository";

describe("LoginUseCase", () => {
  let loginUseCase: LoginUseCase;
  let mockAuthRepository: jest.Mocked<AuthRepository>;

  beforeEach(() => {
    mockAuthRepository = {
      login: jest.fn(),
      logout: jest.fn(),
    };

    loginUseCase = new LoginUseCase(mockAuthRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("invoke", () => {
    it("should call login method of AuthRepository and return the result", async () => {
      // Données de test
      const credentials = {
        username: "john.doe",
        password: "password",
      };

      // Mock de la méthode login du AuthRepository
      const mockResponse = {
        id: 1,
        username: "john.doe",
        email: "john.doe@example.com",
        token: "abcd1234",
      };
      mockAuthRepository.login.mockResolvedValueOnce(mockResponse);

      // Appel de la méthode à tester
      const result = await loginUseCase.invoke(credentials);

      // Vérification des appels et des résultats
      expect(mockAuthRepository.login).toHaveBeenCalledTimes(1);
      expect(mockAuthRepository.login).toHaveBeenCalledWith(credentials);
      expect(result).toEqual(mockResponse);
    });

    it("should throw an error when data is undefined", async () => {
      // Appel de la méthode à tester avec data undefined
      const invokePromise = loginUseCase.invoke(undefined);

      // Vérification que l'appel lève une erreur
      await expect(invokePromise).rejects.toThrow("Credentials not found");
    });
  });
});
