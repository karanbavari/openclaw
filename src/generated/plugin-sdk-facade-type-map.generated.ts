// Reduced fork note:
// The upstream generated facade map references every bundled channel/provider
// package via @openclaw/* imports. This fork removes most bundled messaging
// channel packages, so we intentionally collapse the facade typing surface to a
// permissive map. Channel-specific wrappers that remain in the tree are kept
// compile-safe without reintroducing removed package dependencies.

export type PluginSdkFacadeModule = Record<string, any>;

export interface PluginSdkFacadeTypeMap {
  [key: string]: {
    module: PluginSdkFacadeModule;
  };
}
