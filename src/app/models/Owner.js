const db = require('../../config/db');

module.exports = {
    all() {
        return db.promise().query('SELECT * FROM owners');
    },
    findById(owner_id) {
        return db.promise().query(
            `SELECT
                owner.name AS owner_name,
                owner.mother_name AS owner_mother_name,
                owner.father_name AS owner_father_name,
                owner.rg AS owner_rg,
                owner.rg_expedition AS owner_rg_expedition,
                owner.cpf AS owner_cpf,
                owner.birth AS owner_bith,
                owner.nationality AS owner_nationality,
                owner.marital_status AS owner_marital_status,
                owner.marital_property_systems AS owner_marital_property_systems,
                owner.ocupacy_situation AS owner_ocupacy_situation,
                owner.job AS owner_job,
                owner.literate AS owner_literate,
                owner.company_job AS owner_company_job,
                owner.clt AS owner_clt,
                owner.earning AS owner_earning,
                owner.address AS owner_address,
                owner.square AS owner_square,
                owner.lot AS owner_lot,
                owner.landmark AS owner_landmark,
                owner.district AS owner_district,
                owner.city AS owner_city,
                owner.cell_phone_number AS owner_cell_phone_number,
                owner.phone_number AS owner_phone_number,

                add_family_info.has_knowledge_community_members AS add_family_info_has_knowledge_community_members,
                add_family_info.has_associate_community_meeting AS add_family_info_has_associate_community_meeting,
                add_family_info.work_community_priorities AS add_family_info_work_community_priorities,
                add_family_info.has_social_government_programs AS add_family_info_has_social_government_programs,

                family_health_info.family_members_count AS family_health_info_family_members_count,
                family_health_info.sickness AS family_health_info_sickness,
                family_health_info.has_death_in_last_two_years AS family_health_info_has_death_in_last_two_years,
                family_health_info.deaths_two_years_cause AS family_health_info_deaths_two_years_cause,
                family_health_info.has_disabled_people_members AS family_health_info_has_disabled_people_members,
                family_health_info.deficiencies AS family_health_info_deficiences,
                family_health_info.has_old_people AS family_health_info_has_old_people,
                family_health_info.old_people_count AS family_health_info_old_people_count,
                family_health_info.health_add_info AS family_health_info_health_add_info,

                family_info.origin_city AS family_info_origin_city,
                family_info.state AS family_info_state,
                family_info.city_residence_time AS family_info_city_residence_time,
                family_info.home_residence_time AS family_info_home_residence_time,

                owners_partners.name AS owners_partners_name,
                owners_partners.mother_name AS owners_partners_mother_name,
                owners_partners.father_name AS owners_partners_father_name,
                owners_partners.rg AS owners_partners_rg,
                owners_partners.cpf AS owners_partners_cpf,
                owners_partners.age AS owners_partners_age,
                owners_partners.nationality AS owners_partners_nationality,
                owners_partners.ocupacy_situation AS owners_partners_ocupacy_situation,
                owners_partners.job AS owners_partners_job,
                owners_partners.literate AS owners_partners_literate,
                owners_partners.company_job AS owners_partners_company_job,
                owners_partners.clt AS owners_partners_clt,
                owners_partners.earning AS owners_partners_earning,

                property_info.construction AS property_info_construction,
                property_info.finish AS property_info_finish,
                property_info.drinking_water AS property_info_drinking_water,
                property_info.sewage AS property_info_sewage,
                property_info.electric_power AS property_info_electric_power,
                property_info.trash_destiny AS property_info_trash_destiny,
                property_info.property_type AS property_info_property_type,
                property_info.lot_condition AS property_info_lot_condition,
                property_info.lot_occupacy_number AS property_info_lot_occupacy_number,
                property_info.has_another_property AS property_info_has_another_property,
                property_info.has_iptu AS property_info_has_iptu,
                property_info.iptu_holder AS property_info_iptu_holder,
                property_info.property_documentation AS property_info_property_documentation
            FROM
                owners AS owner
            INNER JOIN
                add_family_info
            ON
                owner.owner_id = add_family_info.owner_id
            INNER JOIN
                family_health_info
            ON
                owner.owner_id = family_health_info.owner_id
            INNER JOIN
                family_info
            ON
                owner.owner_id = family_info.owner_id
            INNER JOIN
                owners_partners
            ON
                owner.owner_id = owners_partners.owner_id
            INNER JOIN
                property_info
            ON
                owner.owner_id = property_info.owner_id
            `
        );
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
