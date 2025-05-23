// Importamos la clase ResponseProvider, que proporciona formatos de respuesta para las solicitudes
import { ResponseProvider } from "../Providers/ResponseProvider.js"; 

// Importamos el servicio CiudadService, que se encarga de gestionar los datos de ciudades
import CiudadService from "../Services/CiudadService.js"; 

// Definimos la clase CiudadController, que actuará como el controlador de ciudades
class CiudadController {  
  // Definimos un método estático que permite obtener todas las ciudades
  static getAllCiudades = async (req, res) => {  
    try {
      // Llamamos al método getCiudades del servicio CiudadService, pasando como argumento "ciudades"
      const response = await CiudadService.getCiudades("ciudades");

      // Validamos si la respuesta contiene un error
      if (response.error) 
        // Si hay un error, retornamos una respuesta de error con el mensaje y el código correspondiente
        return ResponseProvider.error(res, response.message, response.code);

      // Si no hay error, enviamos una respuesta de éxito con los datos obtenidos y un mensaje apropiado
      return ResponseProvider.success(
        res, // Objeto de respuesta
        response.data, // Datos obtenidos del servicio
        response.message, // Mensaje de respuesta
        response.code // Código de respuesta HTTP
      );
    } catch (error) {
      // Capturamos cualquier error inesperado y devolvemos una respuesta de error con un mensaje genérico
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  //Metodo estatico para obtener una ciudad segun su identificador (ID)
  static getCiudadById = async (req, res) => {
    try {
      //Obtenemos el dato del query params correspondiente al id de la ciudad
      const { id } = req.params;
      //Llama al servicio para obtener la data de un producto por su ID
      const response = await CiudadService.getCiudadByID(id);
      // Valida si la respuesta tuvo errores
      if (response.error) {
        // Llama al metodo error de la clase ResponseProvider para retornar una respuesta
        return ResponseProvider.error(res, response.message, response.code);
      }

      // Llama al metodo success de la clase ResponseProvider para retornar una respuesta
      return ResponseProvider.success(
        res, 
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  //Metodo estatico para crear una ciudad
  static createCiudad = async (req, res) => {
    try {
      //Obtiene el cuerpo de la solicitud HTTP, los campos de la tabla
      const object = req.body;
      //Llama al servicio para crear la ciudad
      const response = await CiudadService.createCiudad(object);

      //Valida errores de la respuesta
      if (response.error)
        //Retorna y llama al metodo de respuesta error
        return ResponseProvider.error(res, response.message, response.code);

      //Retorna y llama al metodo de respuesta success
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      //Retorna y llama al metodo de respuesta error
      return ResponseProvider.error(
        res,
        "Error interno al crear la ciudad",
        500
      );
    }
  };

  // Metodo estatico para actualizar una ciudad
  static updateCiudad = async (req, res) => {
    try {
      //Obtenemos el dato del query params correspondiente al id de la ciudad
      const { id } = req.params;
      //Obtiene el cuerpo de la solicitud HTTP, los campos de la tabla
      const campos = req.body;
      //Obtiene la respuesta del metodo del servicio actualizar ciudad
      const response = await CiudadService.updateCiudad(id, campos);

      // Validamos si no se pudo actualizar la ciudad
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos la ciudad actualizada
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      return ResponseProvider.error(
        res,
        "Error interno al actualizar la ciudad",
        500
      );
    }
  };

  //Metodo estatico para eliminar una ciudad
  static deleteCiudad = async (req, res) => {
    try {
      //Obtenemos el dato del query params correspondiente al id de la ciudad
      const { id } = req.params;
      // Obtiene la respuesta del servicio
      const response = await CiudadService.deleteCiudad(id);

      // Validamos si no se pudo eliminar la ciudad
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      //Retorna y llama al metodo de respuesta success
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      return ResponseProvider.error(
        res,
        "Error interno al actualizar la ciudad",
        500
      );
    }
  };
}

export default CiudadController;
