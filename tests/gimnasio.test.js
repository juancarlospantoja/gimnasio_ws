const request = require('supertest');
const express = require('express');
const app = require('../index');

describe('Verificar usuario', () => {
  it('Listar usuario', async () => {
    const res = await request(app)
      .get('/auth')
      .send({
        id_usuario: 1,
        cedula: '123456',
      })
    expect(res.statusCode).toEqual(200)
  })
})

describe('Verificar ciudades', () => {
  it('Listar sedes', async () => {
    const res = await request(app)
      .get('/api')
      .send({
        id_ciudad: 1,
        ciudad_nombre: 'Bogota',
      })
    expect(res.statusCode).toEqual(200)
  })
})

describe('Verificar sedes', () => {
  it('Listar sedes', async () => {
    const res = await request(app)
      .get('/api')
      .send({
        id_sede: 1,
        nombre_sede: 'Norte',
      })
    expect(res.statusCode).toEqual(200)
  })
})