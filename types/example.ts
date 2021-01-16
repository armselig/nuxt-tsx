namespace Types {
  export interface ILink {
    type: 'internal' | 'external' | 'email' | 'phone'
    href: string
    title: string
    target: '_blank' | '_self'
  }
}
