"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { useForm } from "react-hook-form";

const SelectProductsSearchForm = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const defaultValues = {
    category: "",
    title: "",
    steps: "",
    testData: "",
    expectedResult: "",
    platform: "",
    priority: "",
  };

  const { control, handleSubmit } = useForm({
    defaultValues,
    // resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row items-center justify-start gap-4"
    >
      <Input name="category" control={control} placeholder="Categoria" />
      <Input name="title" control={control} placeholder="Titulo" />
      <Input name="steps" control={control} placeholder="Pasos" />
      <Input name="testData" control={control} placeholder="Datos de prueba" />
      <Input
        name="expectedResult"
        control={control}
        placeholder="Resultado esperado"
      />
      <Select
        name="platform"
        control={control}
        placeholder="Plataforma"
        options={[
          { value: "Web", label: "Web" },
          { value: "Mobile", label: "Mobile" },
        ]}
      />
      <Select
        name="priority"
        control={control}
        placeholder="Prioridad"
        options={[
          { value: "Baja", label: "Baja" },
          { value: "Media", label: "Media" },
          { value: "Alta", label: "Alta" },
        ]}
      />
      <Button type="submit" variant="primary">
        Crear
      </Button>
    </form>
  );
};

export default SelectProductsSearchForm;
