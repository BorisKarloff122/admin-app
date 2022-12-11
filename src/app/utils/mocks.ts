export const mocks: any = [
  // users
  [
    {
      table: 'users', // TODO mock value - remove when transfered to backend
      login: "buttman",
      password: "12345",
      roles: [],
      id: 1
    }
  ],

  // chapters
  [
    {
      table: 'chapters',
      name: "index",
      type: "chapter",
      route: "",
      html_content: [],
      scheme: {
        header: [],
        top: [],
        middle: [],
        bottom: [],
        footer: []
      },
      id: 1
    }
  ]


]
