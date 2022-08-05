import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EventInput } from "@fullcalendar/core";
import { Button, Modal, Text } from "@mantine/core";
import FormInput from "../../components/FormInput";

interface AddEditEventProps {
  isOpen: boolean;
  onClose: () => void;
  isEditable?: boolean;
  eventData: EventInput;
  onRemoveEvent?: () => void;
  onUpdateEvent: (value: any) => void;
  onAddEvent: (value: any) => void;
}

const AddEditEvent = ({
  isOpen,
  onClose,
  isEditable,
  eventData,
  onRemoveEvent,
  onUpdateEvent,
  onAddEvent,
}: AddEditEventProps) => {
  // Event State
  const [event] = useState<EventInput>(eventData!);

  // Form Validation Schema
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required("Please enter event name"),
      className: yup.string().required("Please select category"),
    })
  );

  //   Form methods
  const methods = useForm({ defaultValues: event, resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  //   Handle form submission
  const onSubmitEvent = (data: {}) => {
    isEditable ? onUpdateEvent(data) : onAddEvent(data);
  };

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={onClose}
        title={<h5>{isEditable ? "Edit Event" : "Add New Event"}</h5>}
      >
        <div className="px-4 pb-4 pt-0">
          <form
            noValidate
            name="chat-form"
            id="chat-form"
            onSubmit={handleSubmit(onSubmitEvent)}
          >
            <div>
              <FormInput
                type="text"
                label="Event Name"
                name="title"
                className="form-control"
                placeholder="Insert Event Name"
                containerClass={"mb-3"}
                register={register}
                key="title"
                errors={errors}
                control={control}
              />
            </div>
            <div>
              <FormInput
                type="select"
                label="Category"
                name="className"
                containerClass={"mb-3"}
                register={register}
                key="className"
                errors={errors}
                control={control}
              >
                <option value="bg-danger">Danger</option>
                <option value="bg-success">Success</option>
                <option value="bg-primary">Primary</option>
                <option value="bg-info">Info</option>
                <option value="bg-dark">Dark</option>
                <option value="bg-warning">Warning</option>
              </FormInput>
            </div>
            <div>
              {isEditable ? (
                <Button onClick={onRemoveEvent}>
                  <Text>
                    <p>Delete </p>
                  </Text>
                </Button>
              ) : null}
            </div>
            <div>
              <Button onClick={onClose}>Close</Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddEditEvent;
