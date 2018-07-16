'use strict'

class HttpService {

    static handleErrors(res) {

        if( !res.ok ) {

            throw {
                text: res.statusText,
                status: res.status,
                response: res
            };
        }

        return res;
    }

    static get(url, params = '', type = 'json'){
        
        if( params ) {
            let esc = encodeURIComponent;
            let query = Object.keys(params)
                .map(k => esc(k) + '=' + esc(params[k]))
                .join('&');
            url = `${url}?${query}`;
        }

        return fetch(url, {
                method: 'GET',
                credentials: 'include'
            })
            .then(res => this.handleErrors(res))
            .then(res => {
                
                if('text' == type) {
                    return res.text();
                } 

                return res.json();
            });
    }

    static post(url, params, type = 'json'){

        return fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-type' : 'application/json'},
                body: JSON.stringify(params)
            })
            .then(res => this.handleErrors(res))
            .then(res => {
                
                if('text' == type) {
                    return res.text();
                } 

                return res.json();
            });
    }
}