# Prompts

## Prompt 1
eres un experto desarrollador en backend especializado en node, y quiero que crees un archivo llamado prompts-CALL en la carpeta prompst en donde vas a poner todos los prompts que te paso en un formato markdown

## Prompt 2
si

## Prompt 3
analizando el archivo readme

Tu misión en este ejercicio es crear dos nuevos endpoints que nos permitirán manipular la lista de candidatos de una aplicación en una interfaz tipo kanban.

GET /positions/:id/candidates
Este endpoint recogerá todos los candidatos en proceso para una determinada posición, es decir, todas las aplicaciones para un determinado positionID. Debe proporcionar la siguiente información básica:

Nombre completo del candidato (de la tabla candidate).
current_interview_step: en qué fase del proceso está el candidato (de la tabla application).
La puntuación media del candidato. Recuerda que cada entrevist (interview) realizada por el candidato tiene un score
PUT /candidates/:id/stage
Este endpoint actualizará la etapa del candidato movido. Permite modificar la fase actual del proceso de entrevista en la que se encuentra un candidato específico.

no empiezes a codificar sin antes preguntarme todo lo que creas conveniente para realizar las tareas y cuando te de mi aprobación.

## Prompt 4
1.- para esto toma en cuenta el esquema en prisma
2.- no, no
3.-no
4.-no tiene

## Prompt 5
me parece bien

## Prompt 6
quiero probar manualmente los dos enpoint dame los curls

## Prompt 7
me salen los siguientes errores: >> C:\Users\carlos\Documents\lider_curso\AI4Devs-backend>
Invoke-WebRequest : No se encuentra ningún parámetro que coincida con el nombre del parámetro 'X'.
En línea: 1 Carácter: 6
+ curl -X GET http://localhost:3010/positions/1/candidates
+      ~~
    + CategoryInfo          : InvalidArgument: (:) [Invoke-WebRequest], ParameterBindingException
    + FullyQualifiedErrorId : NamedParameterNotFound,Microsoft.PowerShell.Commands.InvokeWebRequestCommand
 
PS C:\Users\carlos\Documents\lider_curso\AI4Devs-backend> curl -X PUT http://localhost:3010/candidates/1/stage -H "Content-Type: application/json" -d '{"current_interview_step": 2}'
Invoke-WebRequest : No se puede enlazar el parámetro 'Headers'. No se puede convertir el valor "Content-Type: application/json" de tipo 
"System.String" al tipo "System.Collections.IDictionary".
En línea: 1 Carácter: 57
+ ... t:3010/candidates/1/stage -H "Content-Type: application/json" -d '{"c ...
+                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidArgument: (:) [Invoke-WebRequest], ParameterBindingException
    + FullyQualifiedErrorId : CannotConvertArgumentNoMessage,Microsoft.PowerShell.Commands.InvokeWebRequestCommand

## Prompt 8
quiero que me des un json para crear un candidato nuevo con el endoint candidates

## Prompt 9
si realizaste los cambios en los archivos para agregar los endpoints?

## Prompt 10
para el caso del servicio tomo como ejemplo export const findCandidateById = async (id: number): Promise<Candidate | null> => {
    try {
        const candidate = await Candidate.findOne(id); // Cambio aquí: pasar directamente el id
        return candidate;
    } catch (error) {
        console.error('Error al buscar el candidato:', error);
        throw new Error('Error al recuperar el candidato');
    }
};
 para hacer la consulta a la bd

## Prompt 11
usando ddd sin utilizar prisma en servicios

## Prompt 12
utilizando los modelos que ya se cuentan

## Prompt 13
deben utilizar tyoescript

## Prompt 14
crea la carpeta de promps en la raiz del proyecto y dentro crea el archivo prompts-CALL.md en donde deben estar todos los prompts que te pase en formato markdown
