/* eslint-disable react/display-name */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { countries } from "@/data/static/countries";
import { UserModel } from "@/domain/model/User";
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
  Avatar,
} from "@mantine/core";
import { forwardRef } from "react";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{label}</Text>
        </div>
      </Group>
    </div>
  )
);

interface ProfileProps {
  accountDetails: UserModel;
}

export const Profile: React.FC<ProfileProps> = ({ accountDetails }) => {
  const {
    form,
    handleSubmit,
    isOnEdit,
    toggleEdit,
    wantedGenres,
    unwantedGenres,
    watchProviderList,
  } = useViewModel(accountDetails);

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
        readOnly={!isOnEdit}
        placeholder="Your name"
        label="Name"
        variant="filled"
        radius="md"
        {...form.getInputProps("name")}
      />
      <Space h="md" />

      <TextInput
        readOnly={!isOnEdit}
        placeholder="Your age"
        label="Age"
        variant="filled"
        radius="md"
        {...form.getInputProps("age")}
      />
      <Space h="md" />

      <Select
        readOnly={!isOnEdit}
        label="Country"
        placeholder="Pick one"
        variant="filled"
        radius="md"
        data={countries}
        {...form.getInputProps("country")}
      />
      <Space h="md" />

      <Textarea
        readOnly={!isOnEdit}
        placeholder="Tell us more about you, we'll recommend better movies and tv-shows."
        label="Description"
        variant="filled"
        radius="md"
        {...form.getInputProps("description")}
      />

      <Space h="md" />
      <Text weight={600} size="xl" mt="md">
        Personalize your experience
      </Text>

      <Space h="md" />
      <MultiSelect
        readOnly={!isOnEdit}
        data={wantedGenres}
        label="Favorite movie genres"
        placeholder="Pick all that you like"
        searchable
        variant="filled"
        nothingFound="Nothing found"
        radius="md"
        {...form.getInputProps("wantedGenres")}
      />

      <Space h="md" />
      <MultiSelect
        readOnly={!isOnEdit}
        data={unwantedGenres}
        label="Excluded movie genres"
        placeholder="Pick all that you don't like"
        searchable
        variant="filled"
        nothingFound="Nothing found"
        radius="md"
        {...form.getInputProps("unwantedGenres")}
      />

      <Space h="md" />
      <MultiSelect
        readOnly={!isOnEdit}
        itemComponent={SelectItem}
        data={watchProviderList}
        label="Streaming services that you have access to"
        placeholder="Pick all the streaming services taht you want"
        searchable
        variant="filled"
        nothingFound="Nothing found"
        radius="md"
        {...form.getInputProps("wantedWatchProviders")}
      />

      <Space h="xl" />
    </form>
  );
};
