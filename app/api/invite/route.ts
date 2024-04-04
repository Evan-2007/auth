export function GET() {
  const autherized = true;
  const allowed = true;

  if (!autherized) {
    return new Response(
      JSON.stringify({
        status: 401,
        body: {
          message: 'Unauthorized',
        },
      })
    );
  }
  if (!allowed) {
    return new Response(
      JSON.stringify({
        status: 403,
        body: {
          message: 'Forbidden',
        },
      })
    );
  }
  return new Response(
    JSON.stringify({
      status: 200,
      body: {
        message: 'allowed',
        invites: [
          {
            created_at: '2021-10-10',
            time_created: '10:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-11',
            time_created: '11:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-12',
            time_created: '12:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-13',
            time_created: '13:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-14',
            time_created: '14:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-10',
            time_created: '10:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-11',
            time_created: '11:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-12',
            time_created: '12:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-13',
            time_created: '13:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-14',
            time_created: '14:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-10',
            time_created: '10:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-11',
            time_created: '11:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-12',
            time_created: '12:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-13',
            time_created: '13:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-14',
            time_created: '14:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-10',
            time_created: '10:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-11',
            time_created: '11:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-12',
            time_created: '12:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-13',
            time_created: '13:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
          {
            created_at: '2021-10-14',
            time_created: '14:00',
            code: '123456',
            accepted: Math.random() < 0.5,
            apps: [
              {
                name: 'app1',
                id: '123456',
              },
              {
                name: 'app2',
                id: '123456',
              },
            ],
          },
        ],
      },
    })
  );
}
