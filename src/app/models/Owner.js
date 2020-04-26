const db = require('../../config/db');

module.exports = {
    all() {
        return db.promise().query('SELECT * FROM owners');
    },
    findById(owner_id) {
        return db.promise().query(`SELECT * FROM owners WHERE owner_id = ${owner_id}`);
    },
    create(owner) {
        const query = `INSERT INTO owners 
        (
            name, 
            mother_name, 
            father_name, 
            rg, 
            rg_expedition, 
            cpf, 
            birth, 
            nationality, 
            marital_status, 
            marital_property_systems, 
            ocupacy_situation, 
            job, 
            literate, 
            company_job, 
            clt, 
            earning, 
            address, 
            square, 
            lot, 
            landmark, 
            district, 
            city, 
            cell_phone_number, 
            phone_number
        ) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            owner.name,
            owner.mother_name,
            owner.father_name,
            owner.rg,
            owner.rg_expedition,
            owner.cpf,
            owner.birth,
            owner.nationality,
            owner.marital_status,
            owner.marital_property_systems,
            owner.ocupacy_situation,
            owner.job,
            owner.literate,
            owner.company_job,
            owner.clt,
            owner.earning,
            owner.address,
            owner.square,
            owner.lot,
            owner.landmark,
            owner.district,
            owner.city,
            owner.cell_phone_number,
            owner.phone_number
        ];

        return db.promise().query(query, values);
    },
    findLastInsert() {
        return db.promise().query('SELECT * FROM owners ORDER BY owner_id DESC LIMIT 1');
    },
    update(owner, owner_id) {
        const query = `UPDATE owners SET
            name = ?, 
            mother_name = ?, 
            father_name = ?, 
            rg = ?, 
            rg_expedition = ?, 
            cpf = ?, 
            birth = ?, 
            nationality = ?, 
            marital_status = ?, 
            marital_property_systems = ?, 
            ocupacy_situation = ?, 
            job = ?, 
            literate = ?, 
            company_job = ?, 
            clt = ?, 
            earning = ?, 
            address = ?, 
            square = ?, 
            lot = ?, 
            landmark = ?, 
            district = ?, 
            city = ?, 
            cell_phone_number = ?, 
            phone_number = ?
            WHERE owner_id = ?`;

        const values = [
            owner.name,
            owner.mother_name,
            owner.father_name,
            owner.rg,
            owner.rg_expedition,
            owner.cpf,
            owner.birth,
            owner.nationality,
            owner.marital_status,
            owner.marital_property_systems,
            owner.ocupacy_situation,
            owner.job,
            owner.literate,
            owner.company_job,
            owner.clt,
            owner.earning,
            owner.address,
            owner.square,
            owner.lot,
            owner.landmark,
            owner.district,
            owner.city,
            owner.cell_phone_number,
            owner.phone_number,
            owner_id
        ];

        return db.promise().query(query, values);
    },
    destroy(owner_id){
        return db.promise().query(`DELETE FROM owners WHERE owner_id = ${owner_id}`);
    }
}