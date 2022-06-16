# example-lib-forRoot
Example lib-forRoot

There're two directories:
-app-library-example (the library)
-app-library-use  (the app)

It's only a example of how create a library that use forRoot to get the configuration from an enviroment.ts file

To generate the library in local:

```
ng build app-lib --prod

cd dist
cd app-lib
npm link
````

To use in the another project

```
cd c:\app-library-use\src
npm link app-library
```

And in app.module.ts

```
   import { AppLibModule} from 'app-lib'

   ...
   imports: [ 
      ...,
      AppLibModule.forRoot({userName: environment.userName})
  ],
```
