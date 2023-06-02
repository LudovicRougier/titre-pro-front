import { UserInfo } from "@/data/datasource/interfaces/AccountDataSource";
import { countries } from "@/data/static/countries";
import { movieGenres } from "@/data/static/movieGenres";
import { useViewModel } from "@/presentation/viewModel/profile";
import {
  Text,
  Space,
  Button,
  MultiSelect,
  Textarea,
  Select,
  TextInput,
  Group,
} from "@mantine/core";

interface ProfileProps {
  accountDetails: UserInfo;
}

export const Profile: React.FC<ProfileProps> = ({ accountDetails }) => {
  const { form, handleSubmit, isOnEdit, toggleEdit } =
    useViewModel(accountDetails);
  return (
    <form onSubmit={handleSubmit}>
      <Group position="apart">
        <Text weight={600} size="xl">
          Public profile
        </Text>
        {isOnEdit ? (
          <Button type="submit" variant="light" radius="md" mt="md">
            Save
          </Button>
        ) : (
          <Button
            variant="light"
            color="gray"
            radius="md"
            mt="md"
            onClick={(event) => {
              event.preventDefault();
              toggleEdit();
            }}
          >
            Edit
          </Button>
        )}
      </Group>

      <Space h="xl" />
      <Space h="xl" />
      <TextInput
        disabled={!isOnEdit}
        placeholder="Your name"
        label="Name"
        variant="filled"
        radius="md"
        {...form.getInputProps("name")}
      />
      <Space h="md" />

      <TextInput
        disabled={!isOnEdit}
        placeholder="Your age"
        label="Age"
        variant="filled"
        radius="md"
        {...form.getInputProps("age")}
      />
      <Space h="md" />

      <Select
        disabled={!isOnEdit}
        label="Country"
        placeholder="Pick one"
        variant="filled"
        radius="md"
        data={countries}
        {...form.getInputProps("country")}
      />
      <Space h="md" />

      <Textarea
        disabled={!isOnEdit}
        placeholder="Tell us more about you, we'll recommend better movies and tv-shows."
        label="Description"
        variant="filled"
        radius="md"
        {...form.getInputProps("description")}
      />

      <Space h="md" />
      <MultiSelect
        disabled={!isOnEdit}
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
        disabled={!isOnEdit}
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
    </form>
  );
};
