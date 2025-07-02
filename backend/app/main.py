from fastapi import FastAPI #importar la clase FastAPI
from fastapi.middleware.cors import CORSMiddleware #esto permite que otras apps puedan acceder a nuestra API
from routes import router #importamos el objeto router que contiene las rutas

app = FastAPI() #creamos una instancia de la clase FastAPI+

#creamos el filtro de seguridad para que la API pueda ser accedida desde cualquier origen
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir cualquier origen
    allow_credentials=True,
    allow_methods=["*"],  # Permitir cualquier método (GET, POST, etc.)
    allow_headers=["*"],  # Permitir cualquier encabezado
)


app.include_router(router)  #incluimos las rutas definidas en el objeto router

