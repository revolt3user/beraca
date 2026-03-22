import './index.css'
import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import.meta.glob('./**/*.ts', { eager: true });

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  name?: string = 'my-element';

  render(): TemplateResult {
    return html`
        <page-home></page-home>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}