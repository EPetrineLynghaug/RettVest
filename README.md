# RettVest

[![Netlify Status](https://api.netlify.com/api/v1/badges/6127e6ad-a977-4547-9845-1ff12710c13f/deploy-status)](https://app.netlify.com/sites/rettvest/deploys)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Netlify Forms

Kontaktskjemaet bruker Netlify Forms med form-navnet `kontakt`.

Etter deploy: gå til Netlify → Project configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification. Velg form `kontakt` og send nye innsendinger til `rvhjemmekennel@gmail.com`.

Kontaktskjemaet kan skrus av ved build med miljøvariabelen `VITE_CONTACT_FORM_ENABLED=false`. Default er aktivt skjema hvis variabelen mangler, og bare verdien `false` deaktiverer det. Når skjemaet er deaktivert, bygges den synlige formen bort og Netlify Forms-detection-skjemaet utelates fra `index.generated.html`. Netlify-builden må gå via `npm run build`, slik at prebuild-scriptet får generert riktig konfigurasjon.

For å aktivere igjen, fjern variabelen eller sett `VITE_CONTACT_FORM_ENABLED=true`, og kjør ny deploy/build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
