const db = require('./db');

const Query = {
  produit:() => db.produit.list(),  
  utilisateur:() => db.utilisateur.list(),
}  

const Produit = {
   
}

const Utilisateur = {  
  
}

const Mutation = {
  returnObjectByCreateProduit:(root,args,context,info) => {
     const id = db.produit.create({nom:args.input.nom,
      description:args.input.description,
      token:args.input.token,
      prix:args.input.prix,
      stock:args.input.stock,
      reference:args.input.reference,
      created_at:args.input.created_at,
      update_at:args.input.update_at})
    return db.produit.get(id)
  },

  returnObjectByCreateUtilisateur:(root,args,context,info) => {
     const id = db.utilisateur.create({nom:args.input.nom,
      prenom:args.input.prenom,
      token:args.input.token,
      role:args.input.role,
      created_at:args.input.created_at,
      update_at:args.input.update_at})
    return db.utilisateur.get(id)
  },

  returnUtilisateurUpdateDataUtilisateurById:(root,args,context,info) => {
      const objectUtilisateur = db.utilisateur.get(args.id);
      
      if(args.input.nom != ''){
        objectUtilisateur.nom = args.input.nom;
      }

      if(args.input.prenom != ''){
        objectUtilisateur.prenom = args.input.prenom;
      }

      if(args.input.token != ''){
        objectUtilisateur.token = args.input.token;
      }

      if(args.input.role != ''){
        objectUtilisateur.role = args.input.role;
      }

      if(args.input.created_at != ''){
        objectUtilisateur.created_at = args.input.created_at;
      }
    
      if(args.input.update_at != ''){
        objectUtilisateur.update_at = args.input.update_at;
      }
       
      const result = db.utilisateur.update(
        {
          id: args.id,
          nom:objectUtilisateur.nom,
          prenom: objectUtilisateur.prenom,
          token: objectUtilisateur.token,
          role: objectUtilisateur.role,
          created_at: objectUtilisateur.created_at,
          update_at: objectUtilisateur.update_at
        });
      return db.utilisateur.get(args.id)       
   },

   returnProduitUpdateDataProduitById:(root,args,context,info) => {
      const objectProduit = db.produit.get(args.id);
      
      if(args.input.nom != ''){
        objectProduit.nom = args.input.nom;
      }

      if(args.input.description != ''){
        objectProduit.description = args.input.description;
      }

      if(args.input.token != ''){
          objectProduit.token = args.input.token;
        }

      if(args.input.prix != ''){
        objectProduit.prix = args.input.prix;
      }
    
      if(args.input.stock != ''){
        objectProduit.stock = args.input.stock;
      }

      if(args.input.reference != ''){
          objectProduit.reference = args.input.reference;
        }

      if(args.input.created_at != ''){
        objectProduit.created_at = args.input.created_at;
      }
    
      if(args.input.update_at != ''){
        objectProduit.update_at = args.input.update_at;
      }
       
      const result = db.produit.update(
        {
          id: args.id,
          nom:objectProduit.nom,
          description: objectProduit.description,
          token: objectProduit.token,
          prix: objectProduit.prix,
          stock: objectProduit.stock,
          reference: objectProduit.reference,
          created_at: objectProduit.created_at,
          update_at: objectProduit.update_at
        });
      return db.produit.get(args.id)       
   },

  returnBooleanDeleteDataProduitById:(root,args,context,info) => {
    const result = db.produit.delete(args.id);
    return true
  },

  returnBooleanDeleteDataUtilisateurById:(root,args,context,info) => {
    const result = db.utilisateur.delete(args.id);
    return true
  }
}

module.exports = {Query, Produit, Utilisateur, Mutation}