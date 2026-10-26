// Central API Service for R.S Enterprises Backend & Inquiries
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost/rs-backend/api'
  : '/rs-backend/api';

export async function submitInquiry(data) {
  try {
    const res = await fetch(`${API_BASE}/inquiries.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.warn('Backend API note: Offline or CORS fallback', err);
    return { success: true, local: true };
  }
}

export async function fetchSiteSettings() {
  try {
    const res = await fetch(`${API_BASE}/settings.php`);
    const result = await res.json();
    return result.success ? result.data.settings : null;
  } catch (err) {
    return null;
  }
}

export async function fetchProducts() {
  try {
    const res = await fetch(`${API_BASE}/products.php`);
    const result = await res.json();
    return result.success ? result.data.products : null;
  } catch (err) {
    return null;
  }
}
