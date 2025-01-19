/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ShellImport } from './routes/_shell'
import { Route as ShellIndexImport } from './routes/_shell/index'
import { Route as ShellStationCountriesRouteImport } from './routes/_shell/stationCountries/route'
import { Route as ShellOpenLibraryRouteImport } from './routes/_shell/openLibrary/route'
import { Route as ShellEnergyChartsRouteImport } from './routes/_shell/energyCharts/route'
import { Route as ShellStationCountriesCountryImport } from './routes/_shell/stationCountries/$country'
import { Route as ShellEnergyChartsCountryImport } from './routes/_shell/energyCharts/$country'

// Create/Update Routes

const ShellRoute = ShellImport.update({
  id: '/_shell',
  getParentRoute: () => rootRoute,
} as any)

const ShellIndexRoute = ShellIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ShellRoute,
} as any)

const ShellStationCountriesRouteRoute = ShellStationCountriesRouteImport.update(
  {
    id: '/stationCountries',
    path: '/stationCountries',
    getParentRoute: () => ShellRoute,
  } as any,
)

const ShellOpenLibraryRouteRoute = ShellOpenLibraryRouteImport.update({
  id: '/openLibrary',
  path: '/openLibrary',
  getParentRoute: () => ShellRoute,
} as any)

const ShellEnergyChartsRouteRoute = ShellEnergyChartsRouteImport.update({
  id: '/energyCharts',
  path: '/energyCharts',
  getParentRoute: () => ShellRoute,
} as any)

const ShellStationCountriesCountryRoute =
  ShellStationCountriesCountryImport.update({
    id: '/$country',
    path: '/$country',
    getParentRoute: () => ShellStationCountriesRouteRoute,
  } as any)

const ShellEnergyChartsCountryRoute = ShellEnergyChartsCountryImport.update({
  id: '/$country',
  path: '/$country',
  getParentRoute: () => ShellEnergyChartsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_shell': {
      id: '/_shell'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ShellImport
      parentRoute: typeof rootRoute
    }
    '/_shell/energyCharts': {
      id: '/_shell/energyCharts'
      path: '/energyCharts'
      fullPath: '/energyCharts'
      preLoaderRoute: typeof ShellEnergyChartsRouteImport
      parentRoute: typeof ShellImport
    }
    '/_shell/openLibrary': {
      id: '/_shell/openLibrary'
      path: '/openLibrary'
      fullPath: '/openLibrary'
      preLoaderRoute: typeof ShellOpenLibraryRouteImport
      parentRoute: typeof ShellImport
    }
    '/_shell/stationCountries': {
      id: '/_shell/stationCountries'
      path: '/stationCountries'
      fullPath: '/stationCountries'
      preLoaderRoute: typeof ShellStationCountriesRouteImport
      parentRoute: typeof ShellImport
    }
    '/_shell/': {
      id: '/_shell/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof ShellIndexImport
      parentRoute: typeof ShellImport
    }
    '/_shell/energyCharts/$country': {
      id: '/_shell/energyCharts/$country'
      path: '/$country'
      fullPath: '/energyCharts/$country'
      preLoaderRoute: typeof ShellEnergyChartsCountryImport
      parentRoute: typeof ShellEnergyChartsRouteImport
    }
    '/_shell/stationCountries/$country': {
      id: '/_shell/stationCountries/$country'
      path: '/$country'
      fullPath: '/stationCountries/$country'
      preLoaderRoute: typeof ShellStationCountriesCountryImport
      parentRoute: typeof ShellStationCountriesRouteImport
    }
  }
}

// Create and export the route tree

interface ShellEnergyChartsRouteRouteChildren {
  ShellEnergyChartsCountryRoute: typeof ShellEnergyChartsCountryRoute
}

const ShellEnergyChartsRouteRouteChildren: ShellEnergyChartsRouteRouteChildren =
  {
    ShellEnergyChartsCountryRoute: ShellEnergyChartsCountryRoute,
  }

const ShellEnergyChartsRouteRouteWithChildren =
  ShellEnergyChartsRouteRoute._addFileChildren(
    ShellEnergyChartsRouteRouteChildren,
  )

interface ShellStationCountriesRouteRouteChildren {
  ShellStationCountriesCountryRoute: typeof ShellStationCountriesCountryRoute
}

const ShellStationCountriesRouteRouteChildren: ShellStationCountriesRouteRouteChildren =
  {
    ShellStationCountriesCountryRoute: ShellStationCountriesCountryRoute,
  }

const ShellStationCountriesRouteRouteWithChildren =
  ShellStationCountriesRouteRoute._addFileChildren(
    ShellStationCountriesRouteRouteChildren,
  )

interface ShellRouteChildren {
  ShellEnergyChartsRouteRoute: typeof ShellEnergyChartsRouteRouteWithChildren
  ShellOpenLibraryRouteRoute: typeof ShellOpenLibraryRouteRoute
  ShellStationCountriesRouteRoute: typeof ShellStationCountriesRouteRouteWithChildren
  ShellIndexRoute: typeof ShellIndexRoute
}

const ShellRouteChildren: ShellRouteChildren = {
  ShellEnergyChartsRouteRoute: ShellEnergyChartsRouteRouteWithChildren,
  ShellOpenLibraryRouteRoute: ShellOpenLibraryRouteRoute,
  ShellStationCountriesRouteRoute: ShellStationCountriesRouteRouteWithChildren,
  ShellIndexRoute: ShellIndexRoute,
}

const ShellRouteWithChildren = ShellRoute._addFileChildren(ShellRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof ShellRouteWithChildren
  '/energyCharts': typeof ShellEnergyChartsRouteRouteWithChildren
  '/openLibrary': typeof ShellOpenLibraryRouteRoute
  '/stationCountries': typeof ShellStationCountriesRouteRouteWithChildren
  '/': typeof ShellIndexRoute
  '/energyCharts/$country': typeof ShellEnergyChartsCountryRoute
  '/stationCountries/$country': typeof ShellStationCountriesCountryRoute
}

export interface FileRoutesByTo {
  '/energyCharts': typeof ShellEnergyChartsRouteRouteWithChildren
  '/openLibrary': typeof ShellOpenLibraryRouteRoute
  '/stationCountries': typeof ShellStationCountriesRouteRouteWithChildren
  '/': typeof ShellIndexRoute
  '/energyCharts/$country': typeof ShellEnergyChartsCountryRoute
  '/stationCountries/$country': typeof ShellStationCountriesCountryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_shell': typeof ShellRouteWithChildren
  '/_shell/energyCharts': typeof ShellEnergyChartsRouteRouteWithChildren
  '/_shell/openLibrary': typeof ShellOpenLibraryRouteRoute
  '/_shell/stationCountries': typeof ShellStationCountriesRouteRouteWithChildren
  '/_shell/': typeof ShellIndexRoute
  '/_shell/energyCharts/$country': typeof ShellEnergyChartsCountryRoute
  '/_shell/stationCountries/$country': typeof ShellStationCountriesCountryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/energyCharts'
    | '/openLibrary'
    | '/stationCountries'
    | '/'
    | '/energyCharts/$country'
    | '/stationCountries/$country'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/energyCharts'
    | '/openLibrary'
    | '/stationCountries'
    | '/'
    | '/energyCharts/$country'
    | '/stationCountries/$country'
  id:
    | '__root__'
    | '/_shell'
    | '/_shell/energyCharts'
    | '/_shell/openLibrary'
    | '/_shell/stationCountries'
    | '/_shell/'
    | '/_shell/energyCharts/$country'
    | '/_shell/stationCountries/$country'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  ShellRoute: typeof ShellRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  ShellRoute: ShellRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_shell"
      ]
    },
    "/_shell": {
      "filePath": "_shell.tsx",
      "children": [
        "/_shell/energyCharts",
        "/_shell/openLibrary",
        "/_shell/stationCountries",
        "/_shell/"
      ]
    },
    "/_shell/energyCharts": {
      "filePath": "_shell/energyCharts/route.tsx",
      "parent": "/_shell",
      "children": [
        "/_shell/energyCharts/$country"
      ]
    },
    "/_shell/openLibrary": {
      "filePath": "_shell/openLibrary/route.tsx",
      "parent": "/_shell"
    },
    "/_shell/stationCountries": {
      "filePath": "_shell/stationCountries/route.tsx",
      "parent": "/_shell",
      "children": [
        "/_shell/stationCountries/$country"
      ]
    },
    "/_shell/": {
      "filePath": "_shell/index.tsx",
      "parent": "/_shell"
    },
    "/_shell/energyCharts/$country": {
      "filePath": "_shell/energyCharts/$country.tsx",
      "parent": "/_shell/energyCharts"
    },
    "/_shell/stationCountries/$country": {
      "filePath": "_shell/stationCountries/$country.tsx",
      "parent": "/_shell/stationCountries"
    }
  }
}
ROUTE_MANIFEST_END */
