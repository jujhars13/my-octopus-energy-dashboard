# My Energy Dashboard

My Energy consumption/generation dashboard

Using the [Octopus Energy 30 min api](https://octopus.energy/dashboard/developer/) data

## Development

### Building

```bash
# install deps locally
(cd app && npm install)

# dev workflow
# browse to http://localhost:8080/
(cd app && npm run watch)
(cd app && npm run serve)

# to build prod release in /docs
# you'll need to git commit this
(cd app && npm run build)
```

```bash
# to get 30 meter reading data from the Octopus API
API_KEY="sk_live_ZWUxZTg3ZGEwZmYzYzQ1MWE4ZjhlODJi" \
  MPAN="3705000641528" \
  SERIAL="68D51222970"
curl -u "${API_KEY}:" "https://api.octopus.energy/v1/electricity-meter-points/${MPAN}/meters/${SERIAL}/consumption/" | jq > app/src/data/data.json
```

## Licence

[MIT](LICENSE)
