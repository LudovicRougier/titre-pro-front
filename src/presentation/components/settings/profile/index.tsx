/* eslint-disable react/display-name */
import { countries } from "@/data/static/countries";
import { UserModel } from "@/domain/model/User";
import { useViewModel } from "@/presentation/viewModel/profile";
import { FR_LOCALE } from "@/shared/enums/fr.locale.enum";
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
          {FR_LOCALE.PUBLIC_PROFILE}
        </Text>
        {isOnEdit ? (
          <Button type="submit" variant="light" radius="md" mt="md">
            {FR_LOCALE.SAVE}
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
            {FR_LOCALE.EDIT}
          </Button>
        )}
      </Group>

      <Space h="xl" />
      <Space h="xl" />
      <TextInput
        readOnly={!isOnEdit}
        placeholder={FR_LOCALE.YOUR_NAME}
        label={FR_LOCALE.NAME}
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
        placeholder={FR_LOCALE.YOUR_AGE}
        label={FR_LOCALE.AGE}
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
        label={FR_LOCALE.COUNTRY}
        placeholder={FR_LOCALE.PICK_ONE}
        variant="filled"
        radius="md"
        data={countries}
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
        placeholder={FR_LOCALE.DESCRIPTION_PLACEHOLDER}
        label={FR_LOCALE.DESCRIPTION}
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
        {FR_LOCALE.PERSONALIZE_YOUR_EXPERIENCE}
      </Text>

      <Space h="md" />
      <MultiSelect
        readOnly={!isOnEdit}
        data={wantedGenres}
        label={FR_LOCALE.WANTED_GENRES}
        placeholder={FR_LOCALE.PICK_MANY}
        searchable
        variant="filled"
        nothingFound={FR_LOCALE.NOTHING_FOUND}
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
        label={FR_LOCALE.UNWANTED_GENRES}
        placeholder={FR_LOCALE.PICK_MANY}
        searchable
        variant="filled"
        nothingFound={FR_LOCALE.NOTHING_FOUND}
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
        label={FR_LOCALE.WANTED_WATCH_PROVIDERS}
        placeholder={FR_LOCALE.PICK_MANY}
        searchable
        variant="filled"
        nothingFound={FR_LOCALE.NOTHING_FOUND}
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
