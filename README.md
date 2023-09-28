# LMS Frontend

### Setup Instructions

1. Clone the project
```
    git clone ...
```

2. Move into the directory
```
    cd ls-frontend
```

3. Install dependencies
```
    npm i
```

4. Run the server
```
    npm run dev
```

### Setup Instructions for Tailwind

[Tailwind Official Instruction Doc] (https://tailwindcss.com/docs/installation)

1. Install tailwindcss
```
    npm install -D tailwindcss
```

2. Create tailwind config file
```
    npx tailwindcss init
```

3. Add file extensions to tailwind config file in content property
```
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
```

4. Add the Tailwind directives to your `index.css`
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding plugins and dependencies

```
    npm install 
        @reduxjs/toolkit 
        react-router-dom 
        react-icons 
        react-chartjs-2 
        chart.js 
        daisyui 
        axios 
        react-hot-toast 
        @tailwindcss/line-clamp
```