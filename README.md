# Laboratoire \#4

## But :
Se familiariser avec le style architectural **REST**.

## Travail :
Réaliser une simple application de TODOs en utilisant un API. 

## Consignes :
* Concevoir une application web dynamique en utilisant
toutes les commandes de l’API.
* Utilisez Postman pour tester l’API!
* Pas de frameworks JavaScript (Vue, Angular, etc)

## Documentation de l'API :

#### <code>GET</code> /:userId/tasks

Permet de retourner toutes les tâches actuelles.

###### Entrée

>Aucune entrée nécessaire

**Paramètres obligatoires**

`userId` est le paramètre de l'id associé à l'utilisateur.

###### Sortie
Retourne la liste de toutes les tâches à faire
```JSON
{
    "tasks": [
        {
            "id": "352e1ee0-49dd-48da-99e0-1ea3cffb1ee3",
            "name": "grab a couple of beers"
        },
        {
            "id": "e1760f91-8329-4387-91b0-5acb0ff99906",
            "name": "drink said beers"
        },
        {
            "id": "8574da1e-f83f-4101-af6d-34d2f8a7318e",
            "name": "take a huge shit"
        }
    ]
}
```

#### <code>POST</code> /:userId/tasks

Permet de créer une nouvelle tâche.

###### Entrée

>Le `content-type` doit être `application/json`

```JSON
{
	"name": "Something"
}
```

**Paramètres obligatoires**

`userId` est le paramètre de l'id associé à l'utilisateur.

###### Sortie
Retourne la tâche avec son `id` et son `name`
```JSON
{
    "id": "8d5fad38-e2d6-41f8-9662-44427a3086e1",
    "name": "Something"
}
```

#### <code>PUT</code> /:userId/tasks/:taskId

Permet de modifier la tâche associée à l'id. (Remplace les valeurs de la tâche par la nouvelle passée dans la requête)

###### Entrée

>Le `content-type` doit être `application/json`

```JSON
{
	"name": "Something else"
}
```

**Paramètres obligatoires**

`userId` est le paramètre de l'id associé à l'utilisateur.

`taskId` est le paramètre de l'id associé à la tâche à modifier.

###### Sortie
Retourne la tâche avec son `id` et son nouveau `name`.
```JSON
{
    "id": "8d5fad38-e2d6-41f8-9662-44427a3086e1",
    "name": "Something else"
}
```

#### <code>DELETE</code> /:userId/tasks/:taskId

Permet de supprimer la tâche associée à l'id.

###### Entrée

>Aucune entrée nécessaire

**Paramètres obligatoires**

`userId` est le paramètre de l'id associé à l'utilisateur.

`taskId` est le paramètre de l'id associé à la tâche à modifier.


###### Sortie
>Aucun retour de la part du serveur
```
