import "reflect-metadata";
import { LogoutUseCase } from "@/domain/useCase/auth/LogoutUseCase";
import { AuthRepository } from "@/data/repository/interfaces/AuthRepository";

describe("LogoutUseCase", () => {
  let logoutUseCase: LogoutUseCase;
  let mockAuthRepository: jest.Mocked<AuthRepository>;

  beforeEach(() => {
    mockAuthRepository = {
      login: jest.fn(),
      logout: jest.fn(),
    };

    logoutUseCase = new LogoutUseCase(mockAuthRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("invoke", () => {
    it("should call logout method of AuthRepository and return the result", async () => {
      // Mock de la méthode logout du AuthRepository
      mockAuthRepository.logout.mockResolvedValueOnce(undefined);

      // Appel de la méthode à tester
      const result = await logoutUseCase.invoke();

      // Vérification des appels et des résultats
      expect(mockAuthRepository.logout).toHaveBeenCalledTimes(1);
      expect(result).toBeUndefined();
    });
  });
});
