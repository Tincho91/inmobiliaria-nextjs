import { Box, Text, Input, Button, Textarea, FormControl, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
{
  /*import Captcha from "./Captcha";*/
}

const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  {
    /*
  const [captchaPassed, setCaptchaPassed] = useState(false);

  const onSubmit = (data) => {
    if (captchaPassed) {
        console.log(data);
    } else {
        alert("Por favor, completa el captcha.");
    }
    };

    const handleCaptchaChange = (captchaValue) => {
        setCaptchaPassed(captchaValue);
    };
    */
  }

  return (
    <Box
      width="100%"
      padding="2rem"
      borderRadius="md"
      backgroundColor="white"
      color="gray.700"
    >
      <Text fontSize="xl" fontWeight="bold">
        Necesitas asesoramiento?
      </Text>
      <Text fontSize="lg">
        Completa el siguiente formulario y nos contactaremos cuanto antes
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
        <Flex gap={{ base:'0', sm:'1rem'}}>
          <Box marginTop="1rem" width='100%'>
            <Input
              {...register("name", { required: true })}
              id="name"
              placeholder="Nombre"
              type="text"
            />
            {errors.name && <p>El nombre es requerido.</p>}
          </Box>
          <Box marginTop="1rem" width='100%'>
            <Input
              {...register("phone", {
                required: true,
                pattern: /^[0-9]{10}$/i,
              })}
              id="phone"
              placeholder="Teléfono"
              type="tel"
            />
            {errors.phone?.type === "required" && (
              <p>El número de teléfono es requerido.</p>
            )}
            {errors.phone?.type === "pattern" && (
              <p>
                El número de teléfono es inválido. Debe ser un número de 10
                dígitos.
              </p>
            )}
          </Box>
          </Flex>
          <Box marginTop="1rem">
            <Textarea
              {...register("message", { required: true })}
              id="message"
              placeholder="Ingresa tu mensaje"
            />
            {errors.message && <p>El mensaje es requerido.</p>}
          </Box>
          <Flex>
            <Button marginTop="1rem" type="submit" colorScheme="orange">
              Enviar
            </Button>
            {/*<Captcha onChange={handleCaptchaChange} />*/}
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default HeroForm;
