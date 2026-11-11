export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .card {
      background: rgba(255,255,255,0.95);
      padding: 60px 80px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      text-align: center;
    }
    h1 {
      font-size: 3rem;
      color: #333;
      margin-bottom: 12px;
    }
    p {
      color: #666;
      font-size: 1.1rem;
    }
    .badge {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 16px;
      background: #f0f0f5;
      border-radius: 20px;
      font-size: 0.85rem;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, World! 👋</h1>
    <p>This page is powered by Cloudflare Workers李晶晶</p>
    <p>香蕉</p>
    <p>橘子</p>
    <span class="badge">Deployed via Wrangler</span>
  </div>
</body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};
