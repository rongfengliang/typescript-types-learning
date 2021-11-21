# typescript type  learning

## dir

```code

├── app-demo  // type demo project with nodejs commonjs 
├── app-demo-types // definiton for app-demo (just incude one index.d.ts file)
└── app-learning // use app-demo module with app-demo-types (with typescript+js)
```

## for js  (use reference)

```code
/// <reference types="@dalongrong/types-demo-types" />
```

## for typescript (use include files & also we can use reference)

```code

{
  "include": [
    "src/**/*"
  ],
  "files": ["node_modules/@dalongrong/types-demo-types/index.d.ts"], // add write types
  "compilerOptions": {
    "declaration": true,
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "outDir": "dist",
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

## some links 

https://drag13.io/posts/custom-typings/index.html

https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

https://www.typescriptlang.org/tsconfig#typeRoots

