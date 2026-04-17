

export type UserStateAttributes = {
    id                     : number;
    username               : string;
    userAddress            : string;
    phone                  : string;
    email                  : string;
    userRole               : string;
    isAdmin                : boolean;
    updatedBy              : string;
    createdAt              : Date;
    updatedAt              : Date;
} | null;

export type GetUserAttributes = {
    id                     : number;
    username               : string;
    userAddress            : string;
    phone                  : string;
    email                  : string;
    userRole               : string;
    isAdmin                : boolean;
    updatedBy              : string;
    createdAt              : Date;
    updatedAt              : Date;
};
export type GetUserAttributesWithUnderScore = {
    id                      : number;
    username                : string;
    user_address            : string;
    phone                   : string;
    email                   : string;
    user_role               : string;
    is_admin                : boolean;
    updated_by              : string;
    created_at              : Date;
    updated_at              : Date;
};

