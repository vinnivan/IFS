
    
   var msg = msg || {}; 
      

        msg.l_Generic_Label = function() {
        return {
        	MSGID: "l_Generic_Label",
	IFSVER: cdt.VariableManager.getGlobalVariable("IFSVER"),
	TRANS_DESC: cdt.VariableManager.getGlobalVariable("TRANS_DESC"),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	SELECTOR: cdt.VariableManager.getLocalVariable("SELECTOR"),
	LABEL_PRINTER: cdt.VariableManager.getLocalVariable("LABEL_PRINTER"),
	LABEL_FORMAT: cdt.VariableManager.getLocalVariable("LABEL_FORMAT"),
	NUM_OF_COPIES: cdt.VariableManager.getLocalVariable("NUM_OF_COPIES"),
	RGRhs1: "",
	INTELLILABEL: cdt.VariableManager.getLocalVariable("INTELLILABEL"),
	LOT: cdt.VariableManager.getLocalVariable("LOT"),
	SERIAL: cdt.VariableManager.getLocalVariable("SERIAL"),
	PART: cdt.VariableManager.getLocalVariable("PART"),
	EXPIRATION_DATE: cdt.VariableManager.getLocalVariable("EXPIRATION_DATE"),
	ENG_REVISION: cdt.VariableManager.getLocalVariable("ENG_REVISION"),
	DESC: cdt.VariableManager.getLocalVariable("DESC"),
	LOCATION_NO: cdt.VariableManager.getLocalVariable("LOCATION_NO"),
	VIRTUAL_LOCATION: cdt.VariableManager.getLocalVariable("VIRTUAL_LOCATION"),
	QUANTITY: cdt.VariableManager.getLocalVariable("QUANTITY"),
	IL_SITE: cdt.VariableManager.getLocalVariable("IL_SITE"),
	ISTATUS: cdt.VariableManager.getLocalVariable("ISTATUS"),
	QTY_PER_LABEL: cdt.VariableManager.getLocalVariable("QTY_PER_LABEL")
        }
    };
    
    

        msg.q_BOM_Version = function() {
        return {
        	MSGID: "q_BOM_Version",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.q_Color = function() {
        return {
        	MSGID: "q_Color",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	PRODUCT: cdt.VariableManager.getLocalVariable("PRODUCT")
        }
    };
    
    

        msg.q_Config = function() {
        return {
        	MSGID: "q_Config",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	PRODUCT: cdt.VariableManager.getLocalVariable("PRODUCT")
        }
    };
    
    

        msg.q_Item_In_Stock = function() {
        return {
        	MSGID: "q_Item_In_Stock",
	IFSVER: cdt.VariableManager.getGlobalVariable("IFSVER"),
	TRANS_DESC: cdt.VariableManager.getGlobalVariable("TRANS_DESC"),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	USE_QUEUE: cdt.VariableManager.getLocalVariable("USE_QUEUE"),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.q_Journal_Names = function() {
        return {
        	MSGID: "q_Journal_Names",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	JOURNALTYPE: cdt.VariableManager.getLocalVariable("JOURNALTYPE")
        }
    };
    
    

        msg.q_Label_Printers = function() {
        return {
        	MSGID: "q_Label_Printers",
	IFSVER: cdt.VariableManager.getGlobalVariable("IFSVER"),
	TRANS_DESC: cdt.VariableManager.getGlobalVariable("TRANS_DESC"),
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	USE_QUEUE: cdt.VariableManager.getLocalVariable("USE_QUEUE")
        }
    };
    
    

        msg.q_Location = function() {
        return {
        	MSGID: "q_Location",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.q_Production_Arrival_Details = function() {
        return {
        	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PRODUCTIONORDER: cdt.VariableManager.getLocalVariable("PRODUCTIONORDER"),
	MSGID: "q_Production_Arrival_Details"
        }
    };
    
    

        msg.q_Production_Arrival_Overview = function() {
        return {
        	MSGID: "q_Production_Arrival_Overview",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE")
        }
    };
    
    

        msg.q_Production_List = function() {
        return {
        	MSGID: "q_Production_List",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.q_Production_Picking_List = function() {
        return {
        	MSGID: "q_Production_Picking_List",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PRODUCTIONORDER: cdt.VariableManager.getLocalVariable("PRODUCTIONORDER")
        }
    };
    
    

        msg.q_Purchase_Arrival_Details = function() {
        return {
        	MSGID: "q_Purchase_Arrival_Details",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PURCHASEORDER: cdt.VariableManager.getLocalVariable("PURCHASEORDER")
        }
    };
    
    

        msg.q_Purchase_Arrival_Overview = function() {
        return {
        	MSGID: "q_Purchase_Arrival_Overview",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE")
        }
    };
    
    

        msg.q_Sales_Routes = function() {
        return {
        	MSGID: "q_Sales_Routes",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	ROUTE_ID: cdt.VariableManager.getLocalVariable("ROUTE_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE")
        }
    };
    
    

        msg.q_Sales_Routes_Details = function() {
        return {
        	MSGID: "q_Sales_Routes_Details",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	ROUTE_ID: cdt.VariableManager.getLocalVariable("ROUTE_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.q_Shipment = function() {
        return {
        	MSGID: "q_Shipment",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE")
        }
    };
    
    

        msg.q_ShipmentLoad_Details = function() {
        return {
        	MSGID: "q_ShipmentLoad_Details",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SHIPMENT_ID: cdt.VariableManager.getLocalVariable("SHIPMENT_ID"),
	DIM_ID: cdt.VariableManager.getLocalVariable("DIM_ID")
        }
    };
    
    

        msg.q_ShipmentLoad_Overview = function() {
        return {
        	MSGID: "q_ShipmentLoad_Overview",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SHIPMENT_ID: cdt.VariableManager.getLocalVariable("SHIPMENT_ID")
        }
    };
    
    

        msg.q_Site = function() {
        return {
        	MSGID: "q_Site",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.q_Size = function() {
        return {
        	MSGID: "q_Size",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	PRODUCT: cdt.VariableManager.getLocalVariable("PRODUCT")
        }
    };
    
    

        msg.q_TagJournals = function() {
        return {
        	MSGID: "q_TagJournals",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.q_Warehouse = function() {
        return {
        	MSGID: "q_Warehouse",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.t_BOM_Finish = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_BOM_Finish",
	SEQN: "",
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	BATCH_NUMBER: cdt.VariableManager.getLocalVariable("BATCH_NUMBER"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PALLET_ID: cdt.VariableManager.getLocalVariable("PALLET_ID"),
	BOM_ID: cdt.VariableManager.getLocalVariable("BOM_ID")
        }
    };
    
    

        msg.t_Counting_Journal = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_Counting_Journal",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	COUNTED: cdt.VariableManager.getLocalVariable("COUNTED"),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	BATCH_NUMBER: cdt.VariableManager.getLocalVariable("BATCH_NUMBER"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PALLET_ID: cdt.VariableManager.getLocalVariable("PALLET_ID")
        }
    };
    
    

        msg.t_Load_Shipment = function() {
        return {
        	MSGID: "t_Load_Shipment",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	REC_ID: cdt.VariableManager.getLocalVariable("REC_ID"),
	SHIPMENT_ID: cdt.VariableManager.getLocalVariable("SHIPMENT_ID"),
	DIM_ID: cdt.VariableManager.getLocalVariable("DIM_ID"),
	PALLET_ID: cdt.VariableManager.getLocalVariable("PALLET_ID"),
	ORDER_ID: cdt.VariableManager.getLocalVariable("ORDER_ID"),
	REC_VERSION: cdt.VariableManager.getLocalVariable("REC_VERSION")
        }
    };
    
    

        msg.t_Post_Production_Picking_List = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_Post_Production_Picking_List",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	PROD_JOURNAL_ID: cdt.VariableManager.getLocalVariable("PROD_JOURNAL_ID"),
	REC_ID: cdt.VariableManager.getLocalVariable("REC_ID"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	QTY: cdt.VariableManager.getLocalVariable("QTY")
        }
    };
    
    

        msg.t_Post_TagCounting_Journal = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_Post_TagCounting_Journal",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	JOURNAL_ID: cdt.VariableManager.getLocalVariable("JOURNAL_ID")
        }
    };
    
    

        msg.t_Production_Order_Arrival = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_Production_Order_Arrival",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	PRODUCTIONORDER: cdt.VariableManager.getLocalVariable("PRODUCTIONORDER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	PRODUCTIONTRANSID: cdt.VariableManager.getLocalVariable("PRODUCTIONTRANSID"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.t_Profit_Loss = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_Profit_Loss",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	BATCH_NUMBER: cdt.VariableManager.getLocalVariable("BATCH_NUMBER"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PALLET_ID: cdt.VariableManager.getLocalVariable("PALLET_ID")
        }
    };
    
    

        msg.t_Purchase_Order_Arrival = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_Purchase_Order_Arrival",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	PURCHASEORDER: cdt.VariableManager.getLocalVariable("PURCHASEORDER"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	PURCHASEORDERTRANSID: cdt.VariableManager.getLocalVariable("PURCHASEORDERTRANSID"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.t_Sales_Pick_Lines = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_Sales_Pick_Lines",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	ROUTE_ID: cdt.VariableManager.getLocalVariable("ROUTE_ID"),
	ORDER_ID: cdt.VariableManager.getLocalVariable("ORDER_ID"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	QTY: cdt.VariableManager.getLocalVariable("QTY")
        }
    };
    
    

        msg.t_Transfer_Journal = function() {
        return {
        	RGRhs1: "",
	MSGID: "t_Transfer_Journal",
	IFSVER: cdt.VariableManager.getGlobalVariable("IFSVER"),
	TRANS_DESC: cdt.VariableManager.getGlobalVariable("TRANS_DESC"),
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	FROM_SITE: cdt.VariableManager.getLocalVariable("FROM_SITE"),
	FROM_WAREHOUSE: cdt.VariableManager.getLocalVariable("FROM_WAREHOUSE"),
	FROM_LOCATION: cdt.VariableManager.getLocalVariable("FROM_LOCATION"),
	TO_SITE: cdt.VariableManager.getLocalVariable("TO_SITE"),
	TO_WAREHOUSE: cdt.VariableManager.getLocalVariable("TO_WAREHOUSE"),
	TO_LOCATION: cdt.VariableManager.getLocalVariable("TO_LOCATION"),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	BATCH_NUMBER: cdt.VariableManager.getLocalVariable("BATCH_NUMBER"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	FROM_PALLET_ID: cdt.VariableManager.getLocalVariable("FROM_PALLET_ID"),
	TO_PALLET_ID: cdt.VariableManager.getLocalVariable("TO_PALLET_ID"),
	QTY: cdt.VariableManager.getLocalVariable("QTY")
        }
    };
    
    

        msg.tv_AddLine_TagCounting_Journal = function() {
        return {
        	RGRhs1: "",
	MSGID: "tv_AddLine_TagCounting_Journal",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	BATCH_NUMBER: cdt.VariableManager.getLocalVariable("BATCH_NUMBER"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PALLET_ID: cdt.VariableManager.getLocalVariable("PALLET_ID"),
	TAG_ID: cdt.VariableManager.getLocalVariable("TAG_ID"),
	JOURNAL_ID: cdt.VariableManager.getLocalVariable("JOURNAL_ID"),
	TAG_STATUS: cdt.VariableManager.getLocalVariable("TAG_STATUS"),
	LINE_NUM: cdt.VariableManager.getLocalVariable("LINE_NUM")
        }
    };
    
    

        msg.tv_CreateTagJournal = function() {
        return {
        	RGRhs1: "",
	MSGID: "tv_CreateTagJournal",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.tv_Production_Picking_List = function() {
        return {
        	RGRhs1: "",
	MSGID: "tv_Production_Picking_List",
	SEQN: cdt.NetworkManager.getTransactionSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PRODID: cdt.VariableManager.getLocalVariable("PRODID")
        }
    };
    
    

        msg.v_Batch_Number = function() {
        return {
        	MSGID: "v_Batch_Number",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	BATCH_NUMBER: cdt.VariableManager.getLocalVariable("BATCH_NUMBER"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	BATCH_EXIST: cdt.VariableManager.getLocalVariable("BATCH_EXIST"),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID")
        }
    };
    
    

        msg.v_BOM_Finish = function() {
        return {
        	RGRhs1: "",
	MSGID: "v_BOM_Finish",
	SEQN: "",
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	QTY: cdt.VariableManager.getLocalVariable("QTY"),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	BATCH_NUMBER: cdt.VariableManager.getLocalVariable("BATCH_NUMBER"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PALLET_ID: cdt.VariableManager.getLocalVariable("PALLET_ID"),
	BOM_ID: cdt.VariableManager.getLocalVariable("BOM_ID")
        }
    };
    
    

        msg.v_BOM_Item = function() {
        return {
        	MSGID: "v_BOM_Item",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_BOM_Version = function() {
        return {
        	MSGID: "v_BOM_Version",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_Dimension_Group = function() {
        return {
        	MSGID: "v_Dimension_Group",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	PRODUCT: cdt.VariableManager.getLocalVariable("PRODUCT")
        }
    };
    
    

        msg.v_Inbound_Location = function() {
        return {
        	MSGID: "v_Inbound_Location",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	SITE: cdt.VariableManager.getLocalVariable("SITE")
        }
    };
    
    

        msg.v_Item = function() {
        return {
        	MSGID: "v_Item",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getGlobalVariable("USERID"),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_Item_Color = function() {
        return {
        	MSGID: "v_Item",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_Item_Config = function() {
        return {
        	MSGID: "v_Item",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_Item_In_Stock = function() {
        return {
        	MSGID: "v_Item_In_Stock",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	BATCH_NUMBER: cdt.VariableManager.getLocalVariable("BATCH_NUMBER"),
	COLOR: cdt.VariableManager.getLocalVariable("COLOR"),
	CONFIGURATION: cdt.VariableManager.getLocalVariable("CONFIGURATION"),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	PALLET_ID: cdt.VariableManager.getLocalVariable("PALLET_ID")
        }
    };
    
    

        msg.v_Item_Size = function() {
        return {
        	MSGID: "v_Item",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	SIZE: cdt.VariableManager.getLocalVariable("SIZE"),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_Location = function() {
        return {
        	MSGID: "v_Location",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	SITE: cdt.VariableManager.getLocalVariable("SITE")
        }
    };
    
    

        msg.v_LogIn = function() {
        return {
        	MSGID: "v_Login",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getLocalVariable("USERID"),
	PASSWORD: cdt.VariableManager.getLocalVariable("PASSWORD"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_Pallet = function() {
        return {
        	MSGID: "v_Pallet",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	LOCATION: cdt.VariableManager.getLocalVariable("LOCATION"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	PALLET_ID: cdt.VariableManager.getLocalVariable("PALLET_ID")
        }
    };
    
    

        msg.v_Production_Order = function() {
        return {
        	MSGID: "v_Production_Order",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	PRODUCTIONORDER: cdt.VariableManager.getLocalVariable("PRODUCTIONORDER"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_Purchase_Order = function() {
        return {
        	MSGID: "v_Purchase_Order",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	PURCHASEORDER: cdt.VariableManager.getLocalVariable("PURCHASEORDER"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_Route = function() {
        return {
        	MSGID: "v_Route",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	ROUTE_ID: cdt.VariableManager.getLocalVariable("ROUTE_ID")
        }
    };
    
    

        msg.v_Serial_Number = function() {
        return {
        	MSGID: "v_Serial_Number",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	SERIAL_NO: cdt.VariableManager.getLocalVariable("SERIAL_NO"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SERIAL_EXIST: cdt.VariableManager.getLocalVariable("SERIAL_EXIST"),
	ITEM_ID: cdt.VariableManager.getLocalVariable("ITEM_ID")
        }
    };
    
    

        msg.v_Shipment = function() {
        return {
        	MSGID: "v_Shipment",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SHIPMENT_ID: cdt.VariableManager.getLocalVariable("SHIPMENT_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE")
        }
    };
    
    

        msg.v_site = function() {
        return {
        	MSGID: "v_site",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	SITE: cdt.VariableManager.getLocalVariable("SITE"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_TagId = function() {
        return {
        	MSGID: "v_TagId",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	TAG_ID: cdt.VariableManager.getLocalVariable("TAG_ID"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID")
        }
    };
    
    

        msg.v_UserId = function() {
        return {
        	MSGID: "v_UserId",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	USERID: cdt.VariableManager.getLocalVariable("USERID")
        }
    };
    
    

        msg.v_Warehouse = function() {
        return {
        	MSGID: "v_Warehouse",
	SEQN: cdt.NetworkManager.getValidationSequence(),
	DT: new Date().toISOString(),
	WAREHOUSE: cdt.VariableManager.getLocalVariable("WAREHOUSE"),
	COMPANY_ID: cdt.VariableManager.getLocalVariable("COMPANY_ID"),
	SITE: cdt.VariableManager.getLocalVariable("SITE")
        }
    };
    
    
