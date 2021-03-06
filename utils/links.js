require('dotenv').config()

let url = process.env.URL

const links = (id = ':id') => ({
  methods: [],
  auth: {
    methods: [
      {
        rel: 'create',
        href: url + '/auth',
        type: 'POST',
        param: ['username', 'password']
      }
    ]
  },
  fish: {
    methods: [
      {
        rel: 'list',
        href: url + '/fish',
        type: 'GET'
      },
      {
        rel: 'create',
        href: url + '/fish',
        type: 'POST'
      }
    ],
    id: {
      methods: [
        {
          rel: 'list.specific',
          href: url + '/fish/' + id,
          type: 'GET'
        },
        {
          rel: 'update.specific',
          href: url + '/fish/' + id,
          type: 'PUT'
        },
        {
          rel: 'delete.specific',
          href: url + '/fish/' + id,
          type: 'DELETE'
        }
      ]
    },
    user: {
      methods: [],
      id: {
        method: [
          {
            rel: 'list',
            href: url + '/fish/user/' + id,
            type: 'GET'
          }
        ]
      }
    }
  },
  user: {
    methods: [
      {
        rel: 'list',
        href: url + '/user',
        type: 'GET'
      },
      {
        rel: 'create',
        href: url + '/user',
        type: 'POST',
        param: ['username', 'password']
      }
    ],
    id: {
      methods: {
        rel: 'list.specific',
        href: url + '/user/' + id,
        type: 'GET'
      }
    }
  },
  webhook: {
    methods: [
      {
        rel: 'add',
        href: url + '/webhook',
        type: 'POST'
      }
    ],
    id: {
      methods: [
        {
          rel: 'list',
          href: url + '/webhook/' + id,
          type: 'GET'
        },
        {
          rel: 'edit',
          href: url + '/webhook/' + id,
          type: 'PUT'
        },
        {
          rel: 'delete',
          href: url + '/webhook/' + id,
          type: 'DELETE'
        }
      ]
    },
    user: {
      methods: [],
      id: {
        methods: [
          {
            rel: 'list',
            href: url + '/webhook/user/' + id,
            type: 'GET'
          }
        ]
      }
    }
  }
})
module.exports = {
  links
}
