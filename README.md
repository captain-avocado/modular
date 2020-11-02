# react-bootstrap

## Simple web app startup config (react + redux + typescript + styled-components)

### Layers

Project is splitted on three layers: 
 - presentation - responds for ui, generally consist of FC
 - domain - responds for main logic with entities, generally consists of main redux store of current module
 - data-access - responds for api, routes, mapping
 
 Major rules for strong decoupling and better code modularaty:
 
 1. Every entity on every level can includes directories: interfaces, enums, types that stands for type annotation and constants/configs and helpers for helper functions and objects.
 2. Common entities must be placed in common directory.
 
 3. Data-access API should consists of separated functions that could be reusing in relevant modules.
 4. Data-access MAPPERS should only affects code-style but not request logic. (that is domain layer of each module responsability).
 
 5. DOMAIN store should be unique for every module for the sake of better modularity.
 
 6. Every component placed in separate directory.
 7. Styles of component should be placed in separate file.
 8. Try to split every logic on dummy components and containers. More dummies and less smarties!
 
 
 
