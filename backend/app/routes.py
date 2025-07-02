from fastapi import APIRouter #sistema de rutas
from data import nombres #importamos los datos

router = APIRouter() #crea un objeto para manejar las rutas
@router.get("/nombres") #ruta para obtener los nombres
def get_nombres(): #funcion para obtener los nombres
    return nombres #retorna los nombres
