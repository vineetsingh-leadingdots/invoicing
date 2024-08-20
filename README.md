# Setup Instructions

1. Install Amplify CLI

```bash
npm install -g @aws-amplify/cli
```

2. Once Amplify CLI is installed, you can skip the configuration step

3. When in root directory of the project, run this command to get amplify resources

```bash
amplify pull --appId dg4x4cnwdnpuv --envName dev
```

4. Install dependencies

```bash
npm install
```

6. Run the app

```bash
npm run dev
```

7. For **Codegen** run these commands

```bash
amplify add codegen
```

8. If it shows it exists run these commands, src/graphql is the directory where the schema is located

```bash
amplify update codegen
amplify codegen
```

9. When new resources are added and deployed, run this command to get the latest changes

```bash
amplify pull
```

All Set! 🚀
