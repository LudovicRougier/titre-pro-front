/* eslint-disable react/display-name */
import { countries } from "@/data/static/countries";
import { UserModel } from "@/domain/model/User";
import { useViewModel } from "@/presentation/viewModel/profile";
import { LOCALE } from "@/shared/enums/locale";
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
          {LOCALE.PUBLIC_PROFILE}
        </Text>
        {isOnEdit ? (
          <Button type="submit" variant="light" radius="md" mt="md">
            {LOCALE.SAVE}
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
            {LOCALE.EDIT}
          </Button>
        )}
      </Group>

      <Space h="xl" />
      <Space h="xl" />
      <TextInput
        readOnly={!isOnEdit}
        placeholder={LOCALE.YOUR_NAME}
        label={LOCALE.NAME}
        variant="filled"
        radius="md"
        {...form.getInputProps("name")}
        onClick={(event) => {
          if (!isOnEdit) {
            event.preventDefault();
            toggleEdit();
          }
        }}
      />
      <Space h="md" />

      <TextInput
        readOnly={!isOnEdit}
        placeholder={LOCALE.YOUR_AGE}
        label={LOCALE.AGE}
        variant="filled"
        radius="md"
        {...form.getInputProps("age")}
        onClick={(event) => {
          if (!isOnEdit) {
            event.preventDefault();
            toggleEdit();
          }
        }}
      />
      <Space h="md" />

      <Select
        readOnly={!isOnEdit}
        label={LOCALE.COUNTRY}
        placeholder={LOCALE.PICK_ONE}
        variant="filled"
        radius="md"
        data={countries}
        searchable
        {...form.getInputProps("country")}
        onClick={(event) => {
          if (!isOnEdit) {
            event.preventDefault();
            toggleEdit();
          }
        }}
      />
      <Space h="md" />

      <Textarea
        readOnly={!isOnEdit}
        placeholder={LOCALE.DESCRIPTION_PLACEHOLDER}
        label={LOCALE.DESCRIPTION}
        variant="filled"
        radius="md"
        {...form.getInputProps("description")}
        onClick={(event) => {
          if (!isOnEdit) {
            event.preventDefault();
            toggleEdit();
          }
        }}
      />

      <Space h="md" />
      <Text weight={600} size="xl" mt="md">
        {LOCALE.PERSONALIZE_YOUR_EXPERIENCE}
      </Text>

      <Space h="md" />
      <MultiSelect
        readOnly={!isOnEdit}
        data={wantedGenres}
        label={LOCALE.WANTED_GENRES}
        placeholder={LOCALE.PICK_MANY}
        searchable
        variant="filled"
        nothingFound={LOCALE.NOTHING_FOUND}
        radius="md"
        {...form.getInputProps("wantedGenres")}
        onClick={(event) => {
          if (!isOnEdit) {
            event.preventDefault();
            toggleEdit();
          }
        }}
      />

      <Space h="md" />
      <MultiSelect
        readOnly={!isOnEdit}
        data={unwantedGenres}
        label={LOCALE.UNWANTED_GENRES}
        placeholder={LOCALE.PICK_MANY}
        searchable
        variant="filled"
        nothingFound={LOCALE.NOTHING_FOUND}
        radius="md"
        {...form.getInputProps("unwantedGenres")}
        onClick={(event) => {
          if (!isOnEdit) {
            event.preventDefault();
            toggleEdit();
          }
        }}
      />

      <Space h="md" />
      <MultiSelect
        readOnly={!isOnEdit}
        itemComponent={SelectItem}
        data={watchProviderList}
        label={LOCALE.WANTED_WATCH_PROVIDERS}
        placeholder={LOCALE.PICK_MANY}
        searchable
        variant="filled"
        nothingFound={LOCALE.NOTHING_FOUND}
        radius="md"
        {...form.getInputProps("wantedWatchProviders")}
        onClick={(event) => {
          if (!isOnEdit) {
            event.preventDefault();
            toggleEdit();
          }
        }}
      />

      <Space h="xl" />
    </form>
  );
};
