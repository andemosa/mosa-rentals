"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useUploadThing } from "@/lib/uploadthing";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }).max(30),
  description: z
    .string()
    .min(1, { message: "Description cannot be empty" })
    .max(160),
  transmission: z.enum(["manual", "automatic", "Automatic", "Manual"]),
  brand: z.string().min(1, { message: "Brand cannot be empty" }),
  capacity: z.coerce.number().min(1, {}).max(10),
  gasoline: z.coerce.number().gte(10).lte(120).safe(),
  price: z.coerce.number().gte(5).safe(),
  coverImage: imageSchema.refine((file) => file.size > 0, "Required"),
  images: z.any(),
});

export const CarForm = ({
  brands,
}: {
  brands: {
    id: string;
    name: string;
  }[];
}) => {
  const router = useRouter();
  const { startUpload } = useUploadThing("imagesUploader");
  const { startUpload: startCoverImageUpload } =
    useUploadThing("coverImageUploader");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const { isSubmitting } = form.formState;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      const imgRes = startUpload(values.images);
      const coverImgRes = startCoverImageUpload([values.coverImage]);

      const [imageUrls, coverImageUrls] = await Promise.all([
        imgRes,
        coverImgRes,
      ]);

      if (imageUrls && coverImageUrls) {
        const response = await axios.post("/api/cars", {
          ...values,
          coverImage: coverImageUrls[0]?.url,
          images: imageUrls?.map(({ url }: { url: string }) => url),
        });
        router.push(`/cars/${response.data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
        <div className="flex space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ferrari 812" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Brand</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select car brand" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {brands.map(({ id, name }) => (
                      <SelectItem key={id} value={id}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="80" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Transmission</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select car transmission" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row">
          <FormField
            control={form.control}
            name="capacity"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Capacity</FormLabel>
                <FormControl>
                  <Input placeholder="Number of people" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gasoline"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Fuel Capacity</FormLabel>
                <FormControl>
                  <Input placeholder="Fuel Capacity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about the car"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coverImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(event) => field.onChange(event.target?.files?.[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Images</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(event) =>
                    field.onChange(Array.from(event.target.files ?? []))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
