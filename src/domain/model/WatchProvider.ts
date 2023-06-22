export interface APIWatchProvider {
  provider_id: string;
  logo_path: string;
  provider_name: string;
  display_priority: number;
}

export interface WatchProvider {
  providerId: string;
  logoPath: string;
  providerName: string;
  displayPriority: number;
}

export class WatchProviderModel implements WatchProvider {
  providerId: string;

  logoPath: string;

  providerName: string;

  displayPriority: number;

  constructor(provider: WatchProvider) {
    this.providerId = provider.providerId;
    this.logoPath = provider.logoPath;
    this.providerName = provider.providerName;
    this.displayPriority = provider.displayPriority;
  }

  public static fromJSON(provider: APIWatchProvider): WatchProvider {
    return new WatchProviderModel({
      providerId: provider.provider_id,
      logoPath: provider.logo_path,
      providerName: provider.provider_name,
      displayPriority: provider.display_priority,
    });
  }

  public static toJSON(provider: WatchProviderModel) {
    return {
      provider_id: provider.providerId,
      logo_path: provider.logoPath,
      provider_name: provider.providerName,
      display_priority: provider.displayPriority,
    };
  }
}
