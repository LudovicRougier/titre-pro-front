import { UserModel } from "@/domain/model/User";
import { WatchProvider } from "@/domain/model/WatchProvider";
import { Genre as movieGenres } from "@/domain/model/Genre";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import { useAccountDependencies } from "@/shared/contexts/dependencies/account";
import { useShow } from "@/shared/hooks/useShow";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState, useEffect } from "react";
import { LOCALE } from "../../shared/enums/locale/index";

export const useViewModel = (userInfo: UserModel) => {
  const { updateAccountDetailsUseCase } = useAccountDependencies();
  const { show: isOnEdit, toggle: toggleEdit } = useShow(false);
  const watchProviderList = useAppSelector(
    (state) => state.WATCH_PROVIDER.watchProviders
  );
  const genreList = useAppSelector((state) => state.GENRE.genres);

  const [wantedGenres, setWantedGenres] = useState<movieGenres[]>(genreList);
  const [unwantedGenres, setUnwantedGenres] =
    useState<movieGenres[]>(genreList);

  const form = useForm({
    initialValues: {
      name: userInfo.name ?? "",
      age: userInfo.age ?? 0,
      country: userInfo.country,
      description: userInfo.description ?? "",
      wantedGenres: userInfo.wantedGenres?.map((genre) => genre.id),
      unwantedGenres: userInfo.unwantedGenres?.map((genre) => genre.id),
      wantedWatchProviders: userInfo.wantedWatchProviders?.map(
        (watchProvider) => watchProvider.providerId
      ),
    },

    validate: {
      name: (value) => (value.trim().length < 3 ? "Name is too short" : null),
      age: (value) =>
        parseInt(value as string, 10) <= 0 ? "Age is too short" : null,
      country: (value) => (!value ? "Please select a country" : null),
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    const selectedWantedGenres = values.wantedGenres?.map((id) => {
      const genre = genreList.find((genre) => genre.id === id);
      return genre || null;
    }) as movieGenres[];
    const selectedUnwantedGenres = values.unwantedGenres?.map((id) => {
      const genre = genreList.find((genre) => genre.id === id);
      return genre || null;
    }) as movieGenres[];
    const selectedWantedWatchProviders = values.wantedWatchProviders?.map(
      (providerId) => {
        const watchProvider = watchProviderList.find(
          (provider) => provider.providerId === providerId
        );
        return watchProvider || null;
      }
    ) as WatchProvider[];

    const updatedUserInfo = new UserModel({
      ...values,
      age: parseInt(values.age as string, 10),
      unwantedGenres: selectedUnwantedGenres,
      wantedGenres: selectedWantedGenres,
      wantedWatchProviders: selectedWantedWatchProviders,
    });

    await updateAccountDetailsUseCase.invoke(updatedUserInfo);
    toggleEdit();
  });

  useEffect(() => {
    const filteredWantedGenres: movieGenres[] = genreList.filter((genre) => {
      return !form.values.unwantedGenres?.includes(genre.id);
    });
    const filteredUnwantedGenres: movieGenres[] = genreList.filter((genre) => {
      return !form.values.wantedGenres?.includes(genre.id);
    });
    setWantedGenres(filteredWantedGenres);
    setUnwantedGenres(filteredUnwantedGenres);
  }, [form.values.unwantedGenres, form.values.wantedGenres, genreList]);

  useEffect(() => {
    setWantedGenres(genreList);
    setUnwantedGenres(genreList);
  }, [genreList]);

  return {
    form,
    handleSubmit,
    isOnEdit,
    toggleEdit,
    wantedGenres: wantedGenres.map((genre) => ({
      label: genre.name,
      value: genre.id,
    })),
    unwantedGenres: unwantedGenres.map((genre) => ({
      label: genre.name,
      value: genre.id,
    })),
    watchProviderList: watchProviderList.map((watchProvider) => ({
      label: watchProvider.providerName,
      value: watchProvider.providerId,
      image: `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${watchProvider.logoPath}`,
    })),
  };
};
