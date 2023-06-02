import { UserInfo } from "@/data/datasource/interfaces/AccountDataSource";
import { countries } from "@/data/static/countries";
import { movieGenres } from "@/data/static/movieGenres";
import { useViewModel } from "@/presentation/viewModel/profile";
import {
  Text,
  Space,
  Button,
  Divider,
  MultiSelect,
  Textarea,
  Select,
  TextInput,
} from "@mantine/core";

interface ProfileProps {
  accountDetails: UserInfo;
}

export const Profile: React.FC<ProfileProps> = ({ accountDetails }) => {
  const { form, handleSubmit } = useViewModel(accountDetails);
  return (
    <>
      <Text weight={600} size="xl">
        Public profile
      </Text>

      <Space h="xl" />
      <Space h="xl" />
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Your name"
          label="Name"
          variant="filled"
          radius="md"
          {...form.getInputProps("name")}
        />
        <Space h="md" />

        <TextInput
          placeholder="Your age"
          label="Age"
          variant="filled"
          radius="md"
          {...form.getInputProps("age")}
        />
        <Space h="md" />

        <Select
          label="Country"
          placeholder="Pick one"
          variant="filled"
          radius="md"
          data={countries}
          {...form.getInputProps("country")}
        />
        <Space h="md" />

        <Textarea
          placeholder="Tell us more about you, we'll recommend better movies and tv-shows."
          label="Description"
          variant="filled"
          radius="md"
          {...form.getInputProps("description")}
        />

        <Space h="md" />
        <MultiSelect
          data={movieGenres}
          label="Favorite movie genres"
          placeholder="Pick all that you like"
          searchable
          variant="filled"
          nothingFound="Nothing found"
          radius="md"
          {...form.getInputProps("favoriteGenres")}
        />

        <Space h="md" />
        <MultiSelect
          data={movieGenres}
          label="Excluded movie genres"
          placeholder="Pick all that you don't like"
          searchable
          variant="filled"
          nothingFound="Nothing found"
          radius="md"
          {...form.getInputProps("excludedGenres")}
        />

        <Space h="xl" />
        <Divider size="sm" />
        <Button type="submit" variant="light" radius="md" mt="md">
          Save
        </Button>
      </form>
      <Space h="xl" />
    </>
  );
};
