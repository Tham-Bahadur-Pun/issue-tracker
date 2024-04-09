"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState<string>()
  const router = useRouter()

  return (
    <div className="max-w-xl p-5">
      {
        error && (
          <Callout.Root className="mb-5" color="red">
            <Callout.Text>
              {error}
            </Callout.Text>
          </Callout.Root>
        )
      }
      <form
        className="space-y-3"
        onSubmit={handleSubmit( async (data) => {
          try {
            await axios.post('/api/issues',data)
            router.push('/issues')
          } catch (error){
            setError('An unexpected error occured.')
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Create New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
