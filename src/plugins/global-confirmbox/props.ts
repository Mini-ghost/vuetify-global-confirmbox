/**
 * Vuetify VDialog Props Type
 *
 * @see https://vuetifyjs.com/en/api/v-dialog/#props
 */
export interface VDialogProps {
  /**
   * Milliseconds to wait before closing component.
   *
   * @default 0
   */
  closeDelay: number | string,

  /**
   * Applies a custom class to the detached element. This is useful because the
   * content is moved to the beginning of the `v-app` component (unless the
   * attach prop is provided) and is not targetable by classes passed directly
   * on the component.
   *
   * @default undefined
   */
  contentClass: string,

  /**
   * Applies the dark theme variant to the component. This will default the
   * components color to white unless you’ve configured your application theme
   * to dark or if you are using the color prop on the component. You can find
   * more information on the Material Design documentation for dark themes.
   *
   * @default false
   */
  dark: boolean,

  /**
   * Hides the display of the overlay.
   *
   * @default false
   */
  hideOverlay: boolean,

  /**
   * Detaches the menu content inside of the component as opposed to the document.
   *
   * @default false
   */
  internalActivator: boolean,

  /**
   * Applies the light theme variant to the component.
   *
   * @default false
   */
  light: boolean,

  /**
   * Sets the maximum width for the component.
   *
   * @default '420px' // vutify v-dialog 預設為 none
   */
  maxWidth: string | number,

  /**
   * Disables the bounce effect when clicking outside of a v-dialog's content
   * when using the persistent prop.
   *
   * @default false
   */
  noClickAnimation: boolean,

  /**
   * Milliseconds to wait before opening component.
   *
   * @default 0
   */
  openDelay: number | string,

  /**
   * Sets the transition origin on the element. You can find more information on
   * the MDN documentation for transition origin.
   *
   * @default 'center center'
   */
  origin: string,

  /**
   * Sets the overlay color.
   *
   * @default undefined
   */
  overlayColor: string,

  /**
   * Sets the overlay opacity.
   *
   * @default undefined
   */
  overlayOpacity: number | string,

  /**
   * Clicking outside of the element will not deactivate it.
   *
   * @default false
   */
  persistent: boolean,

  /**
   * Tab focus will return to the first child of the dialog by default. Disable
   * this when using external tools that require focus such as TinyMCE or
   * vue-clipboard.
   *
   * @default true
   */
  retainFocus: boolean,

  /**
   * When set to true, expects a v-card and a v-card-text component with a
   * designated height. For more information, check out the scrollable example.
   *
   * @default false
   */
  scrollable: boolean,

  /**
   * Sets the component transition. Can be one of the built in transitions or
   * one your own.
   *
   * @default 'dialog-transition'
   */
  transition: string | boolean,

  /**
   * Sets the width for the component.
   *
   * @default 'auto'
   */
  width: string | number,
}

/**
 * g-confirmbox 預設的 v-dialog props
 */
export const defaultProps: Partial<VDialogProps> = {
  maxWidth: '420px'
}