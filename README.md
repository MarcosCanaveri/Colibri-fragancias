Separamos la lógica de nuestra aplicación en distintas capas

Repository (Persistencia de Datos): Es el único que sabe que usamos MongoDB/Mongoose. Su función es estrictamente interactuar con la base de datos (hacer queries, guardar registros, aplicar proyecciones). Si mañana cambiamos MongoDB por PostgreSQL, solo modificamos esta capa; el resto de la aplicación no se entera.
Service (Lógica de Negocio): Es el cerebro de la aplicación. Desconoce de dónde vienen los datos (HTTP, base de datos, archivos). Aquí se aplican reglas de negocio: cálculos de totales, validación de stock, lógica de permisos, y el mapeo de estados del dominio basándose en nuestras constantes congeladas.

