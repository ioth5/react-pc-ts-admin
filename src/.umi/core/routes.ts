// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/ioth5/lxd/github/react-pc-ts-test/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "name": "login",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/layouts/SecurityLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/layouts/BasicLayout'), loading: LoadingComponent}),
            "authority": [
              "admin",
              "user"
            ],
            "routes": [
              {
                "path": "/",
                "redirect": "/welcome",
                "exact": true
              },
              {
                "path": "/welcome",
                "name": "welcome",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/pages/Welcome'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/admin",
                "name": "admin",
                "icon": "crown",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/pages/Admin'), loading: LoadingComponent}),
                "authority": [
                  "admin"
                ],
                "routes": [
                  {
                    "path": "/admin/sub-page",
                    "name": "sub-page",
                    "icon": "smile",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/pages/Welcome'), loading: LoadingComponent}),
                    "authority": [
                      "admin"
                    ],
                    "exact": true
                  }
                ]
              },
              {
                "name": "list.table-list",
                "icon": "table",
                "path": "/list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/pages/ListTableList'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/pages/404'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ioth5/lxd/github/react-pc-ts-test/src/pages/404'), loading: LoadingComponent}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
