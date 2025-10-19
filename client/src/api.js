import companies from './mock/companies.json';

async function fetchCompanies() {
    return Promise.resolve(companies);
}

export { fetchCompanies };